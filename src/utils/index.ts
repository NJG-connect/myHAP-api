import fs from "fs";
import fileUpload, { UploadedFile } from "express-fileupload";

export const upload = async (
  files: fileUpload.FileArray,
  directory: string
): Promise<{ sucess: string[]; errors: string[] }> => {
  // create directory
  fs.mkdirSync(directory, { recursive: true });

  // convert files to flat array
  const formatFiles = Object.values(files).flat(Infinity) as UploadedFile[];

  const namesOfFiles: { sucess: string[]; errors: string[] } = {
    sucess: [],
    errors: [],
  };

  for await (const el of formatFiles) {
    try {
      fs.writeFileSync(`${directory}${el.name}`, el.data);
      namesOfFiles.sucess.push(el.name);
    } catch (err) {
      namesOfFiles.errors.push(el.name);
    }
  }
  return namesOfFiles;
};
