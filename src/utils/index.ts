import fs from "fs";
import fileUpload, { UploadedFile } from "express-fileupload";
import {
  allFormatFile,
  FileEmplacement,
  FileResponseUpload,
  FileType,
  FileTypeEnum,
} from "../types/file";
import { prismaRg } from "../prisma/clients";

export const upload = async (
  files: fileUpload.FileArray,
  types: {
    [key in string]: FileType;
  }
): Promise<FileResponseUpload> => {
  // convert files to flat array
  const formatFiles = Object.values(files).flat(Infinity) as UploadedFile[];

  let namesOfFiles: FileResponseUpload = {
    sucess: [],
    errors: [],
  };
  for await (const el of formatFiles) {
    // create directory
    fs.mkdirSync(types[el.name].emplacement!, {
      recursive: true,
    });

    try {
      fs.writeFileSync(
        `${types[el.name].emplacement}/${decodeURI(el.name)}`,
        el.data
      );

      namesOfFiles.sucess.push({
        ...types[el.name],
        name: el.name,
        emplacement: `${types[el.name].emplacement}/${decodeURIComponent(
          el.name
        )}`,
        date: new Date(),
      });
    } catch (err) {
      namesOfFiles.errors.push(el.name);
    }
  }
  return namesOfFiles;
};

export const takeFilesOnServer = async (
  idDossier: string,
  filesType: FileTypeEnum[]
): Promise<{ link: string; name: string; type: FileTypeEnum }[]> => {
  const linkForStockFile = `${await pathForFile()}/${idDossier}`;
  try {
    const canAccessToFolder = fs.existsSync(linkForStockFile);

    let allFiles: { link: string; name: string; type: FileTypeEnum }[] = [];
    if (canAccessToFolder) {
      for await (const type of filesType) {
        const folderAccess = `${linkForStockFile}${FileEmplacement[type]}`;
        if (fs.existsSync(folderAccess)) {
          const filesWithOneType = fs
            .readdirSync(folderAccess)
            .filter(function (file) {
              return (
                allFormatFile.some((el) => file.toLowerCase().includes(el)) &&
                fs.statSync(folderAccess + "/" + file).isFile()
              );
            })
            .map((name) => ({
              link: `file/${idDossier}/${type}/${name}`,
              name,
              type,
            }));
          allFiles = [...allFiles, ...filesWithOneType];
        }
      }
    }
    return allFiles;
  } catch (error) {
    return [];
  }
};

export const pathForFile = async (): Promise<string> => {
  const societyInfo = await prismaRg.societe.findUnique({
    where: {
      idSociete: "SIEGE",
    },
    select: {
      outputPath: true,
    },
  });

  return process.env.OUTPUT_PATH || societyInfo?.outputPath!;
};
