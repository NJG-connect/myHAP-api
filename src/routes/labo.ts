import { Router } from "express";
import LaboController from "../controllers/LaboController";

const router = Router();

router.post("/itga/notificationMadra", LaboController.notificationMadra);

export default router;
