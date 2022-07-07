import fs from "fs";
import fileUpload, { UploadedFile } from "express-fileupload";
import { FileResponseUpload } from "../types/file";

export const upload = async (
  files: fileUpload.FileArray,
  types: {
    [key in string]: { emplacement: string; link: string; type: string };
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
    fs.mkdirSync(types[el.name].emplacement, { recursive: true });

    try {
      fs.writeFileSync(`${types[el.name].emplacement}/${el.name}`, el.data);
      namesOfFiles.sucess.push({
        name: el.name,
        emplacement: `${types[el.name].emplacement}/${el.name}`,
        link: types[el.name].link,
        type: types[el.name].type,
        date: new Date(),
      });
    } catch (err) {
      namesOfFiles.errors.push(el.name);
    }
  }
  return namesOfFiles;
};
