import { Router } from "express";
import DossierController from "../controllers/DossierController";
import InterventionController from "../controllers/InterventionController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";
import { Roles } from "../types/roles";

const router = Router();

router.get("/:idDossier", [checkJwt], DossierController.getDossierById);
router.patch("/:idDossier", [checkJwt], DossierController.updateDossierById);

router.post(
  "/:idDossier/intervention",
  [checkJwt],
  InterventionController.createIntervention
);
router.patch(
  "/:idDossier/intervention/:idIntervention",
  [checkJwt],
  InterventionController.updateInterventionById
);

export default router;
