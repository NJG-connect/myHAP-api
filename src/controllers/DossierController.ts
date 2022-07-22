import { Request, Response } from "express";
import { prismaDiag, prismaFmdc, prismaRg } from "../prisma/clients";
import { FileTypeEnum, FileResponseUpload, FileType } from "../types/file";
import { takeFilesOnServer } from "../utils";

const getDossierById = async (req: Request, res: Response) => {
  const idDossier = req.params.idDossier;
  const employesParam = req.query.employes;
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
        codePostal: true,
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
    let { dateDebutMission, dateFinMission, ...dossierDiagUtils } = dossierDiag;

    // retrieve files on server
    const docs = await takeFilesOnServer(idDossier, [
      FileTypeEnum.PLAN,
      FileTypeEnum.DICT,
    ]);

    // create dossier with diag and MyHAP
    const dossier: any = {
      diag: { ...dossierDiagUtils, docs },
      myHAP: dossierMyHAP,
    };

    if (employesParam) {
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

      dossier.employes = employesFormated;
    }

    return res.status(200).json(dossier);
  } catch (error) {
    console.error("error", error);
    return res.json(error);
  }
};

interface DiagBody {
  dateCommande: Date;
  commentaire: string;
  idStatut: number;
  idEmployeIntervention: number;
}

const updateDossierById = async (req: Request, res: Response) => {
  const idDossier = req.params.idDossier;

  if (!idDossier) {
    return res
      .status(400)
      .json("Veuillez renseigner un id pour trouver votre dossier");
  }
  if (!Number(idDossier)) {
    return res
      .status(400)
      .json("Veuillez renseigner un id valable pour trouver votre dossier");
  }

  const { diag, myHAP }: { diag: DiagBody; myHAP: any } = req.body;
  let resDossier: any = {};

  // update diag Field
  if (diag) {
    const diagArrFormated = Object.entries(diag).filter(
      (el) =>
        [
          "reference",
          "adresse",
          "cptAdresse",
          "ville",
          "pays",
          "departement",
          "longitude",
          "latitude",
          "commentaire",
          "dateCommande",
          "idStatut",
        ].includes(el[0]) && ![null, undefined, NaN].includes(el[1])
    );
    if (diagArrFormated.length) {
      const diagFormated = Object.fromEntries(diagArrFormated);

      try {
        const dossierDiag = await prismaDiag.dossier.update({
          where: {
            idDossier: Number(idDossier) as number,
          },
          data: diagFormated,
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
          },
        });
        resDossier = { ...resDossier, diag: dossierDiag };
      } catch (error) {
        resDossier = {
          ...resDossier,
          error: resDossier.error ? [...resDossier.error, "diag"] : ["diag"],
        };
      }
    }
  }

  // take diagDossier if diagDossier is empty
  if (!resDossier.diag) {
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
      },
    });
    resDossier = {
      ...resDossier,
      diag: dossierDiag,
    };
  }

  // update myHAP Field
  if (myHAP) {
    const myHAPArrFormated = Object.entries(myHAP).filter(
      (el) =>
        ["typologie", "isParkMarker", "docs"].includes(el[0]) &&
        ![null, undefined, NaN].includes(el[1] as any)
    );
    if (myHAPArrFormated.length) {
      const myHAPFormated = Object.fromEntries(myHAPArrFormated);

      try {
        const dossierMyHAP = await prismaFmdc.dossier.update({
          where: {
            id: Number(idDossier) as number,
          },
          data: myHAPFormated,
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
        resDossier = { ...resDossier, myHAP: dossierMyHAP };
      } catch (error) {
        resDossier = {
          ...resDossier,
          error: resDossier.error ? [...resDossier.error, "myHAP"] : ["myHAP"],
        };
      }
    }
  }

  // take myHAPDossier if myHAP is empty
  if (!resDossier.myHAP) {
    const dossierMyHAP = await prismaFmdc.dossier.findFirst({
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
    resDossier = {
      ...resDossier,
      myHAP: dossierMyHAP,
    };
  }

  res.status(200).json(resDossier);
};

const postFileOnDossier = async (req: Request, res: Response) => {
  const files: FileResponseUpload | undefined =
    (req.headers.files && JSON.parse(JSON.stringify(req.headers.files))) ||
    undefined;

  const idDossier = req.params.idDossier;
  if (!idDossier) {
    return res
      .status(400)
      .json("Veuillez renseigner un id pour trouver votre dossier");
  }

  if (!files) {
    return res.status(400).json("Une Erreur est survenue");
  }

  try {
    const dossier = await prismaFmdc.dossier.findUnique({
      where: {
        id: Number(idDossier),
      },
      select: {
        docs: true,
        id: true,
      },
    });
    if (!dossier) {
      return res
        .status(400)
        .json(
          "Pas de Dossier avec cette Id, commencez par le retrouver avant d'ajouter des fichiers"
        );
    }

    let docs: FileType[] = [];

    // take all files execpt PLAN | DICT-ARRETE
    const filesFilteredForDocsMyHAP = files.sucess.filter(
      (el) => ![FileTypeEnum.DICT, FileTypeEnum.PLAN].includes(el.type)
    );

    if (filesFilteredForDocsMyHAP.length) {
      if (dossier.docs) {
        docs = [...JSON.parse(dossier.docs), ...filesFilteredForDocsMyHAP];
      } else {
        docs = [...filesFilteredForDocsMyHAP];
      }

      await prismaFmdc.dossier.update({
        where: {
          id: Number(idDossier),
        },
        data: {
          docs: JSON.stringify(docs),
        },
      });
    }
    return getDossierById(req, res);
  } catch (error) {
    console.log(error);

    return res.status(400).json(error);
  }
};

export default { getDossierById, updateDossierById, postFileOnDossier };
