import { Router } from "express";
import DossiersController from "../controllers/DossiersController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";
import { Roles } from "../types/roles";

const router = Router();

router.get(
  "/dossiersForToday",
  [checkJwt],
  DossiersController.getDossiersForToday
);

router.get(
  "/:referenceOrNumero",
  [checkJwt],
  DossiersController.getFirstInfoDossiers
);
export default router;
