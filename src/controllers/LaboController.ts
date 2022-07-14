import { Request, Response } from "express";
import { prismaDiag, prismaFmdc, prismaRg } from "../prisma/clients";
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

export default {
  notificationMadra,
};
