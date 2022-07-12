import express, { Router } from "express";
import auth from "../routes/auth";
import file from "../routes/file";
import dossiers from "../routes/dossiers";
import dossier from "../routes/dossier";

import path from "path";

const routes = Router();

// const swaggerOptions = {
//   swaggerDefinition: {
//     info: {
//       title: "Documentation for MyHAP",
//       version: "1.0.0",
//     },
//   },
//   apis: ["development", "local"].includes(process.env.NODE_ENV || "")
//     ? ["**/*.ts"]
//     : ["**/*.js"],
// };

routes.get("/api-docs/swagger.json", (req, res) => {
  let indexPath = path.join(__dirname, "/../swagger/swagger.json");
  return res.sendFile(indexPath);
});

routes.get("/api-docs", (req, res) => {
  let indexPath = path.join(__dirname, "/../swagger/index.html");
  return res.sendFile(indexPath);
});

routes.use("/auth", auth);
routes.use("/dossier", dossier);
routes.use("/dossiers", dossiers);
routes.use("/file", file);

routes.get("*", (req, res) => {
  res.json("Bienvenue sur notre api ");
});

export default routes;
