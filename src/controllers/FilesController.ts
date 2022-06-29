import { Request, Response } from "express";
import { upload as uploadUtil } from "../utils";
import fs from "fs";

const baseUrl = `http://localhost:${process.env.PORT}/file/`;

const directoryPath = __dirname + "/../../resources/uploads/";

const upload = async (req: Request, res: Response) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    const namesOfFiles = await uploadUtil(req.files, directoryPath);

    res.status(200).send({
      message: `Uploaded the file successfully: ${namesOfFiles.sucess.join()}${
        namesOfFiles.errors.length
          ? " and file error : " + namesOfFiles.errors.join(" ")
          : ""
      }`,
      data: namesOfFiles.sucess,
      error: namesOfFiles.errors.length ? namesOfFiles.errors : undefined,
    });
  } catch (err: any) {
    res.status(500).send({
      message: `Could not upload the file: . ${err}`,
    });
  }
};

const getListFiles = (req: Request, res: Response) => {
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
        error: err,
      });
    }
    let fileInfos: { name: string; url: string }[] = [];
    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });
    res.status(200).send(fileInfos);
  });
};
const download = (req: Request, res: Response) => {
  const fileName = req.params.name;
  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};
export default {
  upload,
  getListFiles,
  download,
};
