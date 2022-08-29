import { Request, Response, NextFunction } from "express";
import { prismaRg } from "../prisma/clients";
import { Roles } from "../types/roles";
import * as jwt from "jsonwebtoken";

export const checkRole = (roles: Array<Roles>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Get the user ID from previous midleware or add on locals
      if (!res.locals.jwtPayload) {
        const token = req?.headers?.authorization?.split(" ")[1];
        if (!token) {
          return res.status(401).json({
            error: "Token invalide",
          });
        }
        res.locals.jwtPayload = jwt.verify(token, process.env.JWT_SECRET!);
      }

      const { idUtilisateur } = res.locals.jwtPayload;

      if (!idUtilisateur) {
        return res.status(401).json({
          error: "idUtilisateur inexistant",
        });
      }

      // Get user role from the database
      const user = await prismaRg.utilisateur.findUnique({
        where: {
          idUtilisateur,
        },
      });
      // Check if array of authorized roles includes the user's role or its the admin
      if (
        (user && roles.includes(user.idGroupeUtilisateur as Roles)) ||
        user?.idGroupeUtilisateur === Roles.GU_3
      ) {
        return next();
      }
      return res.status(401).json({
        error:
          "Cette utilisateur n'a pas le role pour avoir accès à cette ressource",
      });
    } catch (error) {
      return res.status(401).json({ error });
    }
  };
};
