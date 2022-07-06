import { Router, Request } from "express";
import FilesController from "../controllers/FilesController";
import fileUpload from "express-fileupload";

const directoryPath = __dirname + "/../../resources/uploads/";

const router = Router();

//Upload route
router.post("/upload", fileUpload(), FilesController.upload);
router.get("/:name", FilesController.download);
router.get("/", FilesController.getListFiles);
export default router;
