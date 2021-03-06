import { Request, Response } from "express";
import { prismaDiag } from "../prisma/clients";

const getFirstInfoDossiers = async (req: Request, res: Response) => {
  const referenceOrNumero = req.params.referenceOrNumero;

  if (!referenceOrNumero) {
    return res
      .status(400)
      .json("Aucune Référence ou Numero de dossier n'a été renseigné");
  }

  try {
    const dossiers = await prismaDiag.dossier.findMany({
      where: {
        OR: [
          {
            reference: {
              contains: referenceOrNumero,
            },
          },
          {
            ...(!!Number(referenceOrNumero) && {
              numero: {
                equals: Number(referenceOrNumero),
              },
            }),
          },
        ],
      },
      take: 5,
      select: {
        numero: true,
        idDossier: true,
        reference: true,
      },
    });

    const newDossiers = dossiers.map((el) => ({
      name: `${el.numero} - ${el.reference}`,
      id: el.idDossier,
    }));

    return res.status(200).json(newDossiers);
  } catch (error) {
    console.log("error", error);
    return res.status(400).json(error);
  }
};

//  (toute les interventions au dessus de 10 *100 en excluant le 24)    /
// nbr d'intervention dont la date du jour est compris entre date de debut et date de fin  en excluant 24
const getDossiersForToday = async (req: Request, res: Response) => {
  const d = new Date();
  let startDate = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0);
  const endDate = new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    23,
    59,
    59
  );

  try {
    const interventions = await prismaDiag.dossier.findMany({
      where: {
        AND: [
          {
            StatutDossier: {
              idStatut: {
                not: {
                  in: [36],
                },
              },
            },
          },
          {
            OR: [
              {
                dateDebutMission: {
                  gte: startDate.toISOString(),
                  lte: endDate.toISOString(),
                },
              },
              {
                AND: [
                  {
                    dateDebutMission: {
                      lte: endDate.toISOString(),
                    },
                  },

                  {
                    dateFinMission: {
                      gte: endDate.toISOString(),
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      select: {
        idDossier: true,
        numero: true,
        dateDebutMission: true,
        dateFinMission: true,
        StatutDossier: {
          select: {
            idStatut: true,
            intitule: true,
            ordre: true,
          },
        },
      },
    });

    const result = {
      totalIntervention: interventions.length,
      completeIntervention: interventions.filter(
        (el) => el && el.StatutDossier && el.StatutDossier?.ordre >= 10
      ).length,
      pourcentFinished: 0,
      date: `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`,
    };
    result.pourcentFinished =
      (result.completeIntervention * 100) / result.totalIntervention;

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json(`error : ${error}`);
  }
};

export default { getFirstInfoDossiers, getDossiersForToday };
