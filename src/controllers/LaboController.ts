import { Request, Response } from "express";
import { prismaDiag, prismaFmdc, prismaRg } from "../prisma/clients";
import { Couche, Prelevement } from "../prisma/generated/fmdc/rest";
import { laboratoireType } from "../types/laboratoire";
import createId from "../utils/createId";
import DossierController from "./DossierController";

const notificationMadra = async (req: Request, res: Response) => {
  try {
    const { referenceCommande = undefined }: { referenceCommande?: string } =
      req.body;

    if (!referenceCommande) {
      return res.status(400).json("referenceCommande pas renseigné");
    }

    // do something with referenceCommande

    return res.status(200).json("notification bien reçu");
  } catch (error) {
    return res.status(500).json("une erreur est survenue");
  }
};
const sendInfoToLabo = async (req: Request, res: Response) => {
  const {
    couchesIdsByPrelevementIds,
    contrat,
  }: {
    couchesIdsByPrelevementIds: { [key in number]: number[] };
    contrat: { laboratoire: laboratoireType; contrat?: string };
  } = req.body;
  const { idDossier } = req.params;

  if (!idDossier) {
    return res
      .status(400)
      .json(
        `Veuillez renseigner un id ${
          !idDossier && "dossier"
        } rattaché à vos couches`
      );
  }
  if (!Number(idDossier)) {
    return res
      .status(400)
      .json(
        `Veuillez renseigner un id ${
          !Number(idDossier) && "dossier"
        } valable pour trouver votre dossier`
      );
  }

  try {
    if (!Object.keys(couchesIdsByPrelevementIds).length) {
      return res.status(400).json("pas de couche renseigné.");
    }
    if (!contrat.laboratoire) {
      return res.status(400).json("Vous avez pas selectionné un labo.");
    }

    const CouchesByPrelevement = await prismaFmdc.prelevement.findMany({
      where: {
        id: {
          in: Object.keys(couchesIdsByPrelevementIds).map((el) => Number(el)),
        },
      },
      include: {
        couches: {
          where: {
            id: {
              in: Object.values(couchesIdsByPrelevementIds).reduce(
                (prev, current) => [...prev, ...current],
                []
              ),
            },
          },
        },
      },
    });
    if (contrat.laboratoire === laboratoireType.ITGA) {
      sendCouchesToITGA(Number(idDossier), CouchesByPrelevement, contrat);
    }

    // do something with referenceCommande
  } catch (error) {
    return res.status(500).json("une erreur est survenue");
  }
  return DossierController.getDossierById(req, res);
};

const sendCouchesToITGA = async (
  idDossier: number,
  CouchesByPrelevement: (Prelevement & {
    couches: Couche[];
  })[],
  contrat: { laboratoire: laboratoireType; contrat?: string }
) => {
  const BASE_URL_ITGA = {
    Production: "https://webservices.itga.fr/madra.WebAPI/",
    Validation: "https://webservices.itga.fr/madra.WebAPI.valid/",
  };

  const body = {
    CompteUtilisateur: {
      Identifiant: "7759WCOM01",
      MotDePasse: "b87c6b97cc720739d39c1a2d74198e1f",
    },
    Commande: {
      Dossier: idDossier,
      IdSIClient: createId(),
      Client: {
        Code: "7759W",
      },
      Contact: {
        Nom: "FMDC",
        Email: "resultatsenrobes77@exim.fr",
        Client: {
          Code: "7759W",
        },
      },
      ListeEchantillonsMateriaux: CouchesByPrelevement.map(
        (onePrelevement) => ({
          Description: onePrelevement.materiaux,
          Dossier: idDossier,
          ChoixAnalyseCouche: "UneAnalyseGlobale",
          IdSIClient: onePrelevement.id,
          Reference: onePrelevement.id,
          ListeReperages: onePrelevement.couches.map((oneCouche) => ({
            Ordre: oneCouche.numero,
            Description: oneCouche.materiaux,
            Analyse: 1,
          })),
        })
      ),
      Origine: "Autre",
    },
  };

  const postData = await fetch(`${BASE_URL_ITGA.Validation}CommandesClient`, {
    method: "POST",
    headers: {
      version: "2",
      login: "7759WCOM01",
      password: "b87c6b97cc720739d39c1a2d74198e1f",
    },
    body: JSON.stringify(body),
  });
  console.log(postData);
};

export default {
  notificationMadra,
  sendInfoToLabo,
};
