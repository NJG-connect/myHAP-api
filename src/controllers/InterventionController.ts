import { Request, Response } from "express";
import { prismaFmdc } from "../prisma/clients";
import DossierController from "./DossierController";
// idDossier idIntervention
const createIntervention = async (req: Request, res: Response) => {
  const idDossier = req.params.idDossier;

  if (!idDossier) {
    return res
      .status(400)
      .json("Veuillez renseigner un id pour créer votre intervention");
  }
  if (!Number(idDossier)) {
    return res
      .status(400)
      .json("Veuillez renseigner un id valable pour trouver votre dossier");
  }

  const interventionField: any = req.body;

  const interventionArrFormated = Object.entries(interventionField).filter(
    (el) =>
      ["dateDebutMission", "idEmployeIntervention"].includes(el[0]) &&
      ![null, undefined, NaN].includes(el[1] as any)
  );

  if (!interventionArrFormated.length) {
    return res
      .status(400)
      .json(
        "Veuillez renseigner tout les champs pour créer votre Intervention"
      );
  }

  try {
    await prismaFmdc.dossier.findUnique({
      where: {
        id: Number(idDossier),
      },
    });
  } catch (error) {
    return res
      .status(400)
      .json("Votre Dossier n'existe pas pour lui créer une intervention");
  }

  const interventionFormated = Object.fromEntries(interventionArrFormated);

  try {
    await prismaFmdc.intervention.create({
      data: {
        ...interventionFormated,
        idDossier: Number(idDossier),
        isFirstIntervention: false,
      },
    });
  } catch (error) {
    return res
      .status(400)
      .json("Une erreur est survenue dans la création de votre Intervention");
  }
  return DossierController.getDossierById(req, res);
};

const updateInterventionById = async (req: Request, res: Response) => {
  const { idDossier, idIntervention } = req.params;

  if (!idDossier || !idIntervention) {
    return res
      .status(400)
      .json(
        `Veuillez renseigner un id ${!idDossier && "dossier"} ${
          !idIntervention && "intervention"
        } pour trouver votre intervention`
      );
  }
  if (!Number(idDossier) || !Number(idIntervention)) {
    return res
      .status(400)
      .json(
        `Veuillez renseigner un id ${!Number(idDossier) && "dossier"} ${
          !Number(idIntervention) && "idIntervention"
        } valable pour trouver votre intervention`
      );
  }

  const interventionField: any = req.body;

  const interventionArrFormated = Object.entries(interventionField).filter(
    (el) => ![null, undefined, NaN].includes(el[1] as any)
  );

  if (!interventionArrFormated.length) {
    return res
      .status(400)
      .json("Veuillez renseigner un champ pour modifier l'Intervention");
  }

  try {
    const interventionExist = await prismaFmdc.intervention.findUnique({
      where: {
        id: Number(idIntervention),
      },
    });
    if (!interventionExist) {
      return res.status(400).json("Votre Intervention n'existe pas");
    }
  } catch (error) {
    return res.status(400).json("Votre Intervention n'existe pas");
  }

  const interventionFormated = Object.fromEntries(interventionArrFormated);

  try {
    await prismaFmdc.intervention.update({
      where: {
        id: Number(idIntervention),
      },
      data: interventionFormated,
    });
  } catch (error) {
    return res
      .status(400)
      .json(
        "Une erreur est survenue dans la modification de votre Intervention"
      );
  }

  return DossierController.getDossierById(req, res);
};

export default { createIntervention, updateInterventionById };
