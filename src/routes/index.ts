import { Router } from "express";
import auth from "../routes/auth";
import file from "../routes/file";
import dossiers from "../routes/dossiers";
import dossier from "../routes/dossier";

import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
const swaggerDocument = require("../docs/swagger.json");

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

// const swaggerDocs = swaggerJsDoc(swaggerOptions);
routes.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

routes.use("/auth", auth);
routes.use("/dossier", dossier);
routes.use("/dossiers", dossiers);
routes.use("/file", file);

routes.get("*", (req, res) => {
  res.json("Bienvenue sur notre api ");
});

export default routes;
