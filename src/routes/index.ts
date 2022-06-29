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

routes.get("/user/:id", async (req, res) => {
  const users = await prismaRg.utilisateur.findMany({
    take: 30,
    where: {
      idEmploye: Number(req.params.id),
    },
  });
  res.json(users);
});
// find and update user
// routes.get("/tryuser/:id", async (req, res) => {
//   const user = await prismaRg.utilisateur.findFirst({
//     where: {
//       login: req.params.id,
//     },
//   });

//   if (user) {
//     const ress = await prismaRg.utilisateur.update({
//       data: { mdp: "password" },
//       where: {
//         idUtilisateur: user.idUtilisateur,
//       },
//     });

//     return res.json({ ress });
//   }
//   return res.json("no user exist");
//   // res.json(user);
// });

routes.get("*", (req, res) => {
  res.json("Bienvenue sur notre api ");
});

export default routes;
