import { Request, Response } from "express";
import { prismaDiag, prismaFmdc, prismaRg } from "../prisma/clients";
import { Couche, Prelevement } from "../prisma/generated/fmdc/rest";
import { laboratoireType } from "../types/laboratoire";
import createId from "../utils/createId";
import DossierController from "./DossierController";
import fetch from "node-fetch";

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

    const diagDossier = await prismaDiag.dossier.findUnique({
      where: {
        idDossier: Number(idDossier),
      },
      select: {
        reference: true,
        idDossier: true,
      },
    });
    if (contrat.laboratoire === laboratoireType.ITGA) {
      sendCouchesToITGA(
        {
          idDossier: Number(idDossier),
          referenceDossier: diagDossier?.reference,
        },
        CouchesByPrelevement,
        contrat
      );
    }

    // do something with referenceCommande
  } catch (error) {
    return res.status(500).json("une erreur est survenue");
  }
  return DossierController.getDossierById(req, res);
};

const sendCouchesToITGA = async (
  {
    idDossier,
    referenceDossier,
  }: { idDossier: number; referenceDossier: string | null | undefined },
  CouchesByPrelevement: (Prelevement & {
    couches: Couche[];
  })[],
  contrat: { laboratoire: laboratoireType; contrat?: string }
) => {
  const BASE_URL_ITGA = {
    Production: "https://webservices.itga.fr/madra.WebAPI/",
    Validation: "https://webservices.itga.fr/madra.WebAPI.valid/",
  };
  const idCommande = createId();
  const body = {
    compteUtilisateur: {
      Identifiant: "7759WCOM01",
      MotDePasse: "b87c6b97cc720739d39c1a2d74198e1f",
    },
    commande: {
      Reference: idCommande,
      IdSIClient: referenceDossier,
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
          Dossier: idDossier.toString(),
          ChoixAnalyseCouche: "UneAnalysePourChaqueCouche",
          IdSIClient: onePrelevement.id.toString(),
          Reference: onePrelevement.id.toString(),
          DatePrelevement: "2018-03-19",
          Commentaires: "Analyse granulat + liant + HAP",
          ListeMPSCA: "C",
          AnalyseHAP: "Oui",
          ListeReperages: onePrelevement.couches.map((oneCouche) => ({
            Ordre: oneCouche.numero,
            Description: oneCouche.materiaux,
            Analyse: 1,
            Liste: "C",
            Chapitre: "",
            Composants: "",
            PartiesComposants: "",
          })),
        })
      ),
      Origine: "Autre",
    },
  };
  console.log(idCommande);

  console.log(body);
  console.log(body.commande.ListeEchantillonsMateriaux[0]);
  console.log(body.commande.ListeEchantillonsMateriaux[1]);

  const postData = await fetch(`${BASE_URL_ITGA.Validation}CommandesClient`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      version: "2",
      login: "7759WCOM01",
      password: "b87c6b97cc720739d39c1a2d74198e1f",
    },
    body: JSON.stringify(body),
  });
  try {
    const responseJson = await postData.json();
    console.log(responseJson);
  } catch (error) {
    console.log("fail");

    console.log(postData);
  }
};

export default {
  notificationMadra,
  sendInfoToLabo,
};

//  vrai référence qcsqykenl59l6nfto2p

// C001-3, C002-3, C002-4
// DateReceptionDesDonnees: '2022-08-09T15:06:43',
// IdSIClient: '4isb5lkhwsel6m75cja',
// Reference: 'LOGIREP - GROUPE POLYLOGIS 59942 24.07.18',

// Récupérer les résultats à partir de sa référence :
// https://webservices.itga.fr/madra.WebAPI.valid/CommandesClient/LOGIREP - GROUPE POLYLOGIS 59942 24.07.18/EchantillonsMateriaux?identifiant=7759WCOM01&motDePasse=b87c6b97cc720739d39c1a2d74198e1f

//  Récupérer un rappport
// https://webservices.itga.fr/madra.WebAPI.valid/CommandesClient/LOGIREP - GROUPE POLYLOGIS 59942 24.07.18/EchantillonsMateriaux/Rapports?identifiant=7759WCOM01&motDePasse=b87c6b97cc720739d39c1a2d74198e1f
