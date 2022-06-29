import { Request, Response } from "express";
import { prismaDiag, prismaFmdc, prismaRg } from "../prisma/clients";

const getDossierById = async (req: Request, res: Response) => {
  const idDossier = req.params.idDossier;

  if (!idDossier) {
    return res
      .status(400)
      .json("Veuillez renseigner un id pour trouver votre dossier");
  }

  try {
    const dossierDiag = await prismaDiag.dossier.findUnique({
      where: {
        idDossier: Number(idDossier),
      },
      select: {
        numero: true,
        idDossier: true,
        reference: true,
        adresse: true,
        cptAdresse: true,
        ville: true,
        pays: true,
        departement: true,
        longitude: true,
        latitude: true,
        dateCommande: true,
        idStatut: true,
        commentaire: true,
        StatutDossier: {
          select: {
            intitule: true,
          },
        },
        // if dossier dont exist, we will create with this
        dateDebutMission: true,
        dateFinMission: true,
        idEmployeIntervention: true,
      },
    });
    if (!dossierDiag) {
      return res
        .status(400)
        .json("Aucun dossier n'a été renseigné avec cette id");
    }

    let dossierMyHAP = await prismaFmdc.dossier.findFirst({
      where: {
        id: Number(idDossier),
      },
      include: {
        interventions: {
          include: {
            prelevements: {
              include: {
                couches: true,
              },
            },
          },
        },
      },
    });

    // if dossier dont exist we create it  on own BBD
    if (!dossierMyHAP) {
      const newDossierOnMyHAP = await prismaFmdc.dossier.create({
        data: {
          id: dossierDiag.idDossier,
          interventions: {
            create: {
              dateDebutMission: dossierDiag.dateDebutMission,
              dateFinMission: dossierDiag.dateFinMission,
              isFirstIntervention: true,
              idEmployeIntervention: dossierDiag.idEmployeIntervention,
            },
          },
        },
        include: {
          interventions: {
            include: {
              prelevements: {
                include: {
                  couches: true,
                },
              },
            },
          },
        },
      });
      dossierMyHAP = { ...newDossierOnMyHAP };
    }

    // delete usless keys
    const {
      dateDebutMission,
      dateFinMission,
      idEmployeIntervention,
      ...dossierDiagUtils
    } = dossierDiag;

    //where 4 equals Technicien
    const employes = await prismaRg.employe.findMany({
      where: {
        idFonction: 4, //
      },
      select: {
        nom: true,
        idEmploye: true,
        prenom: true,
      },
    });

    const employesFormated = employes.map((el) => ({
      name: `${el.prenom} ${el.nom}`,
      id: el.idEmploye,
    }));

    // create dossier with diag and MyHAP
    const dossier = {
      diag: dossierDiagUtils,
      myHAP: dossierMyHAP,
      employes: employesFormated,
    };

    return res.status(200).json(dossier);
  } catch (error) {
    console.log("error", error);
    return res.json(error);
  }

  return res.json("something wrong");
};

export default { getDossierById };
