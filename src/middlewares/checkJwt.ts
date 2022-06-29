import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const jwtTimer = "3d";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  //Get the jwt token from the head
  const authHeader: undefined | string = req?.headers?.authorization;
  if (!authHeader) {
    res.status(401);
    return res.json("token non valide");
  }
  const token = authHeader?.split(" ")[1];

  let jwtPayload: any;

  //Try to validate the token and get data
  try {
    jwtPayload = jwt.verify(token, process.env.JWT_SECRET!);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    res.status(401);
    return res.json("token non valide");
  }

  //Want to send a new token on every request
  const { idUtilisateur, idGroupeUtilisateur, login, mail, prenom, nom } =
    jwtPayload;
  const newToken = jwt.sign(
    { idUtilisateur, idGroupeUtilisateur, login },
    process.env.JWT_SECRET!,
    {
      expiresIn: jwtTimer,
    }
  );

  req.headers = {
    ...req.headers,
    idUtilisateur,
    idGroupeUtilisateur,
    login,
    mail,
    prenom,
    nom,
  };
  res.setHeader("token", newToken);

  //Call the next middleware or controller
  next();
};
