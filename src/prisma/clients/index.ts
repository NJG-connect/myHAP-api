import { PrismaClient as PrismaClientDiag } from "../generated/diag/rest";
const prismaDiag = new PrismaClientDiag();

import { PrismaClient as PrismaClientRg } from "../generated/rg/rest";
const prismaRg = new PrismaClientRg();

import { PrismaClient as PrismaClientFmdc } from "../generated/fmdc/rest";
const prismaFmdc = new PrismaClientFmdc();

export { prismaDiag, prismaRg, prismaFmdc };
