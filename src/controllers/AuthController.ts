import Express from "express";
import { prismaRg } from "../prisma/clients";
import * as jwt from "jsonwebtoken";
import { jwtTimer } from "../middlewares/checkJwt";

export const login = async (req: Express.Request, res: Express.Response) => {
  let { login, mdp } = req.body;

  if (!(login && mdp)) {
    return res.status(400).json("login, Mot de passe non rempli");
  }
  //Get user from database
  let utilisateur;
  try {
    utilisateur = await prismaRg.utilisateur.findFirst({
      where: { login: login.toLowerCase() },
    });
  } catch (error) {
    return res.status(401).json("login incorrect");
  }

  //Check if encrypted password match
  if (mdp.toLowerCase() !== utilisateur?.mdp?.toLocaleLowerCase()) {
    return res.status(401).json("Mot de passe Incorrect");
  }

  let employe;
  try {
    employe = await prismaRg.employe.findUnique({
      where: {
        idEmploye: Number(utilisateur?.idEmploye),
      },
    });
    if (!employe) {
      return res.json("utilisateur pas rataché à un employé");
    }
  } catch (error) {
    return res.json("utilisateur pas rataché à un employé");
  }
  const info = {
    idUtilisateur: utilisateur?.idUtilisateur,
    idGroupeUtilisateur: utilisateur?.idGroupeUtilisateur,
    login,
    mail: employe.mail,
    prenom: employe.prenom,
    nom: employe.nom,
  };
  const token = jwt.sign(info, process.env.JWT_SECRET!, {
    expiresIn: jwtTimer,
  });
  const { exp }: any = jwt.decode(token);

  const responseForUser = {
    ...info,
    token,
    exp,
  };

  //Send the jwt in the response
  return res.json(responseForUser);
};

export default { login };
