import { Request, Response } from "express";
import { prismaDiag, prismaFmdc, prismaRg } from "../prisma/clients";
import DossierController from "./DossierController";

const createPrelevement = async (req: Request, res: Response) => {
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

  const prelevementField: any = req.body;

  // format prelevement
  const prelevementArrFormated = Object.entries(prelevementField).filter(
    (el) => ![null, undefined, NaN].includes(el[1] as any)
  );

  if (!prelevementArrFormated.length) {
    return res
      .status(400)
      .json("Veuillez renseigner des champs pour ajouter le prelevement.");
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
  const prelevementFormated: any = Object.fromEntries(prelevementArrFormated);

  let createCouche: any = {
    canCreate: false,
    data: [],
  };

  // check if we need create couche
  if (Object.hasOwn(prelevementFormated, "couches")) {
    // format prelevement with key we need
    const couchesFormated = prelevementFormated.couches
      .filter(
        (oneCouche: any) =>
          Object.entries(oneCouche).filter(
            (oneCoucheFormatedInArr) =>
              ![null, undefined, NaN].includes(oneCoucheFormatedInArr[1] as any)
          ).length
      )
      .map((el: any) =>
        Object.fromEntries(
          Object.entries(el).filter(
            (oneCouche) => ![null, undefined, NaN].includes(oneCouche[1] as any)
          )
        )
      );

    if (couchesFormated.length) {
      createCouche.canCreate = true;
      createCouche.data = couchesFormated;
    }
    delete prelevementFormated.couches;
  }

  try {
    await prismaFmdc.prelevement.create({
      data: {
        idIntervention: Number(idIntervention),
        ...prelevementFormated,
        couches: {
          createMany: {
            data: createCouche.data,
          },
        },
      },
    });
  } catch (error) {
    return res
      .status(400)
      .json("Une erreur est survenue dans la création de votre Prélèvement");
  }

  return DossierController.getDossierById(req, res);
};
const updatePrelevementById = async (req: Request, res: Response) => {
  const { idDossier, idIntervention, idPrelevement } = req.params;

  if (!idDossier || !idIntervention || !idPrelevement) {
    return res
      .status(400)
      .json(
        `Veuillez renseigner un id ${!idDossier && "dossier"} ${
          !idIntervention && "intervention"
        } ${!idPrelevement && "prelevement"} pour trouver votre intervention`
      );
  }
  if (!Number(idDossier) || !Number(idIntervention) || !Number(idPrelevement)) {
    return res
      .status(400)
      .json(
        `Veuillez renseigner un id ${!Number(idDossier) && "dossier"} ${
          !Number(idIntervention) && "idIntervention"
        }  ${
          !Number(idPrelevement) && "idPrelevement"
        } valable pour trouver votre prelevement`
      );
  }

  const prelevementField: any = req.body;

  // format prelevement
  const prelevementArrFormated = Object.entries(prelevementField).filter(
    (el) => ![null, undefined, NaN].includes(el[1] as any)
  );

  if (!prelevementArrFormated.length) {
    return res
      .status(400)
      .json("Veuillez renseigner des champs pour modifier le prelevement.");
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

  try {
    const prelevementExist = await prismaFmdc.prelevement.findUnique({
      where: {
        id: Number(idPrelevement),
      },
    });
    if (!prelevementExist) {
      return res.status(400).json("Votre Prelevement n'existe pas");
    }
  } catch (error) {
    return res.status(400).json("Votre Prelevement n'existe pas");
  }

  const prelevementFormated: any = Object.fromEntries(prelevementArrFormated);
  let modifyCouche: any = {
    dataForCreate: [],
    dataForModify: [],
    dataForDelete: [],
  };

  // check if we need modify couche
  if (Object.hasOwn(prelevementFormated, "couches")) {
    // format prelevement with key we need
    const couchesFormated = prelevementFormated.couches
      .filter(
        (oneCouche: any) =>
          Object.entries(oneCouche).filter(
            (oneCoucheFormatedInArr) =>
              ![null, undefined, NaN].includes(oneCoucheFormatedInArr[1] as any)
          ).length
      )
      .map((el: any) =>
        Object.fromEntries(
          Object.entries(el).filter(
            (oneCouche) => ![null, undefined, NaN].includes(oneCouche[1] as any)
          )
        )
      );

    if (couchesFormated.length) {
      couchesFormated.forEach((oneCouche: any) => {
        if (Object.hasOwn(oneCouche, "id")) {
          const { id, ...otherFieldOfCouche } = oneCouche;

          // if have element in oneCouche its for modify
          if (Object.keys(otherFieldOfCouche).length) {
            modifyCouche.dataForModify.push({
              data: otherFieldOfCouche,
              where: { id },
            });
          } else {
            // if oneCouche only have id its for delete
            modifyCouche.dataForDelete.push(id);
          }
        } else {
          modifyCouche.dataForCreate.push(oneCouche);
        }
      });
    }
    delete prelevementFormated.couches;
  }

  // Rajouter un deleteMany  => on pourrait les distingué si dans l'object des couches il y a uniquement l'id

  try {
    await prismaFmdc.prelevement.update({
      where: {
        id: Number(idPrelevement),
      },
      data: {
        ...prelevementFormated,
        couches: {
          deleteMany: {
            id: {
              in: modifyCouche.dataForDelete,
            },
          },
          updateMany: modifyCouche.dataForModify,
          createMany: {
            data: modifyCouche.dataForCreate,
          },
        },
      },
    });
  } catch (error) {
    console.error(error);

    return res
      .status(400)
      .json("Une erreur est survenue lors de l'édition de votre Prélèvement");
  }
  return DossierController.getDossierById(req, res);
};

const deletePrelevementById = async (req: Request, res: Response) => {
  const { idDossier, idIntervention, idPrelevement } = req.params;
  if (!idDossier || !idIntervention || !idPrelevement) {
    return res
      .status(400)
      .json(
        `Veuillez renseigner un id ${!idDossier && "dossier"} ${
          !idIntervention && "intervention"
        } ${!idPrelevement && "prelevement"} pour trouver votre intervention`
      );
  }
  if (!Number(idDossier) || !Number(idIntervention) || !Number(idPrelevement)) {
    return res
      .status(400)
      .json(
        `Veuillez renseigner un id ${!Number(idDossier) && "dossier"} ${
          !Number(idIntervention) && "idIntervention"
        }  ${
          !Number(idPrelevement) && "idPrelevement"
        } valable pour trouver votre prelevement`
      );
  }

  try {
    const prelevementExist = await prismaFmdc.prelevement.findUnique({
      where: {
        id: Number(idPrelevement),
      },
    });
    if (!prelevementExist) {
      return res.status(400).json("Votre Prelevement n'existe pas");
    }
  } catch (error) {
    return res.status(400).json("Votre Prelevement n'existe pas");
  }

  try {
    await prismaFmdc.couche.deleteMany({
      where: {
        idPrelevement: Number(idPrelevement),
      },
    });
  } catch (error) {
    return res
      .status(400)
      .json("Problème dans la suppression des couches lié à votre prélèvement");
  }

  try {
    await prismaFmdc.prelevement.delete({
      where: {
        id: Number(idPrelevement),
      },
    });
  } catch (error) {
    return res.status(400).json("Problème dans la suppression du Prelevement.");
  }
  return DossierController.getDossierById(req, res);
};

export default {
  createPrelevement,
  updatePrelevementById,
  deletePrelevementById,
};
