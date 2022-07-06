import { Request, Response, NextFunction } from "express";
import { UploadedFile } from "express-fileupload";
import { prismaRg } from "../prisma/clients";
import { FileEmplacement, FileType } from "../types/file";
import { upload as uploadUtil } from "../utils";

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

    const typeOfImg =
      req.body.type && typeof req.body.type === "string"
        ? JSON.parse(req.body["type"])
        : req.body.type || undefined;

    if (
      !typeOfImg ||
      Object.keys(typeOfImg).length !== formatFiles.length ||
      !Object.keys(typeOfImg).every((nameFromType) =>
        formatFiles.map((el) => el.name).includes(nameFromType)
      )
    ) {
      return res
        .status(400)
        .send({ message: "Renseigne un type au fichier upload" });
    }

    const societyInfo = await prismaRg.societe.findUnique({
      where: {
        idSociete: "SIEGE",
      },
      select: {
        outputPath: true,
      },
    });

    const linkForStockFile = process.env.OUTPUT_PATH || societyInfo?.outputPath;

    let type: { [key in string]: { emplacement: string; type: string } } = {};
    for (const [key, value] of Object.entries(typeOfImg)) {
      type[key] = {
        emplacement: `${linkForStockFile}/${idDossier}${
          FileEmplacement[value as FileType] || ""
        }`,
        type: value as string,
      };
    }
    const namesOfFiles = await uploadUtil(req.files, type);
    req.headers = {
      ...req.headers,
      files: namesOfFiles as any,
    };
  } catch (err: any) {
    return res.status(500).send({
      message: `Could not upload the file: . ${err}`,
    });
  }

  //Call the next middleware or controller
  next();
};

// res.status(200).send({
//   message: `Uploaded the file successfully: ${namesOfFiles.sucess
//     .map((el) => el.name)
//     .join()}${
//     namesOfFiles.errors.length
//       ? " and file error : " + namesOfFiles.errors.join(" ")
//       : ""
//   }`,
//   data: namesOfFiles.sucess,
//   error: namesOfFiles.errors.length ? namesOfFiles.errors : undefined,
// });
