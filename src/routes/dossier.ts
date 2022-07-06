import { Router } from "express";
import DossierController from "../controllers/DossierController";
import InterventionController from "../controllers/InterventionController";
import PrelevementController from "../controllers/PrelevementController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";
import { addFileMiddleware } from "../middlewares/addFile";
import { Roles } from "../types/roles";
import fileUpload from "express-fileupload";

const router = Router();

router.get("/:idDossier", [checkJwt], DossierController.getDossierById);
router.patch("/:idDossier", [checkJwt], DossierController.updateDossierById);
router.post(
  "/:idDossier/file",
  [checkJwt],
  fileUpload(),
  [addFileMiddleware],
  DossierController.postFileOnDossier
);

// Intervention
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

router.post(
  "/:idDossier/intervention/:idIntervention/file",
  [checkJwt],
  fileUpload(),
  [addFileMiddleware],
  InterventionController.postFileOnIntervention
);

// Prelevement
router.post(
  "/:idDossier/intervention/:idIntervention/prelevement",
  [checkJwt],
  PrelevementController.createPrelevement
);
router.patch(
  "/:idDossier/intervention/:idIntervention/prelevement/:idPrelevement",
  [checkJwt],
  PrelevementController.updatePrelevementById
);
router.delete(
  "/:idDossier/intervention/:idIntervention/prelevement/:idPrelevement",
  [checkJwt],
  PrelevementController.deletePrelevementById
);

export default router;
