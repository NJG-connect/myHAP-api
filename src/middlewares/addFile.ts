import { Request, Response, NextFunction } from "express";
import { UploadedFile } from "express-fileupload";
import { FileEmplacement, FileType, FileTypeEnum } from "../types/file";
import { pathForFile, upload as uploadUtil } from "../utils";

export const addFileMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idDossier = req.params.idDossier;
  if (!idDossier) {
    return res
      .status(400)
      .json("Veuillez renseigner un id pour trouver votre dossier");
  }

  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    let formatFiles = Object.values(req.files).flat(Infinity) as UploadedFile[];

    const infoFiles: {
      [key in string]: { type: FileTypeEnum; [key: string]: string };
    } =
      req.body.infoFiles && typeof req.body.infoFiles === "string"
        ? JSON.parse(req.body["infoFiles"])
        : req.body.infoFiles || undefined;

    if (
      !infoFiles ||
      Object.keys(infoFiles).length !== formatFiles.length ||
      !Object.keys(infoFiles).every(
        (nameFromType) =>
          formatFiles.map((el) => el.name).includes(nameFromType) &&
          Object.keys(FileEmplacement).includes(infoFiles[nameFromType]["type"])
      )
    ) {
      return res
        .status(400)
        .send({ message: "Renseigne un type valide au fichier upload" });
    }

    const linkForStockFile = await pathForFile();
    let type: {
      [key in string]: any;
    } = {};
    for (const [key, value] of Object.entries(infoFiles)) {
      type[key] = {
        ...value,
        emplacement: `${linkForStockFile}/${idDossier}${
          FileEmplacement[value.type]
        }`,
        name: key,
        link: `file/${idDossier}/${value.type}/${key}`,
      };
    }
    const namesOfFiles = await uploadUtil(req.files, type);
    req.headers = {
      ...req.headers,
      files: namesOfFiles as any,
    };
  } catch (err: any) {
    console.log(err);
    return res.status(500).send({
      message: `Could not upload the file: . ${err}`,
    });
  }

  next();
};
