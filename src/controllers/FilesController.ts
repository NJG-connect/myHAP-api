import { Request, Response } from "express";
import { pathForFile } from "../utils";
import { prismaFmdc } from "../prisma/clients";
import { FileEmplacement, FileType, FileTypeEnum } from "../types/file";

export const baseUrl = `http://localhost:${process.env.PORT}/file/`;

// const getListFiles = (req: Request, res: Response) => {
//   fs.readdir(directoryPath, function (err, files) {
//     if (err) {
//       res.status(500).send({
//         message: "Unable to scan files!",
//         error: err,
//       });
//     }
//     let fileInfos: { name: string; url: string }[] = [];
//     files.forEach((file) => {
//       fileInfos.push({
//         name: file,
//         url: baseUrl + file,
//       });
//     });
//     res.status(200).send(fileInfos);
//   });
// };

// its for download or see image with link
const download = async (req: Request, res: Response) => {
  const {
    idDossier,
    typeFile,
    nameFile,
  }: { idDossier?: string; typeFile?: FileTypeEnum; nameFile?: string } =
    req.params;

  const wantDownload = req.query.download;

  if (!idDossier || !typeFile || !nameFile) {
    return res
      .status(400)
      .json(
        `Veuillez renseigner ${!idDossier && "  un id dossier"} ${
          !typeFile && " un répétoire"
        } ${!nameFile && "le nom du fichier"} pour trouver votre ressource`
      );
  }

  if (!Number(idDossier)) {
    return res
      .status(400)
      .json("Veuillez renseigner un id valable pour trouver votre dossier");
  }

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

  if (!Object.keys(FileEmplacement).includes(typeFile)) {
    return res.status(400).json("Pas de repertoire avec le type de fichier");
  }

  const linkForStockFile = await pathForFile();

  const linkOfImage = `${linkForStockFile}/${idDossier}${
    FileEmplacement[typeFile as FileTypeEnum]
  }/${nameFile}`;

  return res[wantDownload ? "download" : "sendFile"](linkOfImage, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};
export default {
  // getListFiles,
  download,
};
