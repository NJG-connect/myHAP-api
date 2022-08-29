import { Router, Request } from "express";
import FilesController from "../controllers/FilesController";

const router = Router();

// display or download File || params for download = boolean
router.get("/:idDossier/:typeFile/:nameFile", FilesController.download);
export default router;
