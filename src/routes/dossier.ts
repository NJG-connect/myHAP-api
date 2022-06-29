import { Router } from "express";
import DossierController from "../controllers/DossierController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";
import { Roles } from "../types/roles";

const router = Router();

router.get("/:idDossier", [checkJwt], DossierController.getDossierById);
export default router;
