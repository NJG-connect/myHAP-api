
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.0.0
 * Query Engine version: da41d2bb3406da22087b849f0e911199ba4fbf11
 */
Prisma.prismaVersion = {
  client: "4.0.0",
  engine: "da41d2bb3406da22087b849f0e911199ba4fbf11"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.DossierScalarFieldEnum = makeEnum({
  id: 'id',
  isParkMarker: 'isParkMarker',
  typologie: 'typologie',
  docs: 'docs'
});

exports.Prisma.InterventionScalarFieldEnum = makeEnum({
  id: 'id',
  dateDebutMission: 'dateDebutMission',
  dateFinMission: 'dateFinMission',
  idEmployeIntervention: 'idEmployeIntervention',
  zones: 'zones',
  isFirstIntervention: 'isFirstIntervention',
  idDossier: 'idDossier',
  updatedAt: 'updatedAt'
});

exports.Prisma.PrelevementScalarFieldEnum = makeEnum({
  id: 'id',
  date: 'date',
  emplacement: 'emplacement',
  latitude: 'latitude',
  longitude: 'longitude',
  altitude: 'altitude',
  adresse: 'adresse',
  codePostal: 'codePostal',
  ville: 'ville',
  departement: 'departement',
  materiaux: 'materiaux',
  taille: 'taille',
  couleur: 'couleur',
  images: 'images',
  laboratoire: 'laboratoire',
  zone: 'zone',
  resultat: 'resultat',
  PrelevementPossible: 'PrelevementPossible',
  choixPrelevementImPossible: 'choixPrelevementImPossible',
  idIntervention: 'idIntervention',
  numero: 'numero',
  updatedAt: 'updatedAt'
});

exports.Prisma.CoucheScalarFieldEnum = makeEnum({
  id: 'id',
  taille: 'taille',
  couleur: 'couleur',
  amiante: 'amiante',
  materiaux: 'materiaux',
  HAP: 'HAP',
  liant: 'liant',
  granulat: 'granulat',
  idPrelevement: 'idPrelevement',
  numero: 'numero',
  laboratoire: 'laboratoire',
  bonCommandeLabo: 'bonCommandeLabo',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  Dossier: 'Dossier',
  Intervention: 'Intervention',
  Prelevement: 'Prelevement',
  Couche: 'Couche'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
