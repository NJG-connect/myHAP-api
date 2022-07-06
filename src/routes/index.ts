import { Router } from "express";
import auth from "../routes/auth";
import file from "../routes/file";
import dossiers from "../routes/dossiers";
import dossier from "../routes/dossier";
import { prismaDiag, prismaFmdc, prismaRg } from "../prisma/clients";
const routes = Router();

routes.use("/auth", auth);
routes.use("/file", file);
routes.use("/dossiers", dossiers);
routes.use("/dossier", dossier);

routes.get("*", (req, res) => {
  res.json("Bienvenue sur notre api ");
});

export default routes;
