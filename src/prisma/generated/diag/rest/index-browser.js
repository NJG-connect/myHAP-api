
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
  idDossier: 'idDossier',
  numero: 'numero',
  idRefDossier: 'idRefDossier',
  idSiteGestion: 'idSiteGestion',
  idBien: 'idBien',
  idEmployeIntervention: 'idEmployeIntervention',
  idEmployeCommande: 'idEmployeCommande',
  idEmployeRedaction: 'idEmployeRedaction',
  idEmployerPublication: 'idEmployerPublication',
  reference: 'reference',
  referenceExterne: 'referenceExterne',
  dateCommande: 'dateCommande',
  dateRapport: 'dateRapport',
  datePublication: 'datePublication',
  dateSignatureNotaire: 'dateSignatureNotaire',
  idCadreMission: 'idCadreMission',
  contactPlace: 'contactPlace',
  accompagnateur: 'accompagnateur',
  verrouille: 'verrouille',
  idStatut: 'idStatut',
  dateDebutMission: 'dateDebutMission',
  dateFinMission: 'dateFinMission',
  heureRDV: 'heureRDV',
  heureFin: 'heureFin',
  idRdv: 'idRdv',
  commentaire: 'commentaire',
  codeBien: 'codeBien',
  discBien: 'discBien',
  typeProprieteBatiment: 'typeProprieteBatiment',
  typeProprieteLot: 'typeProprieteLot',
  usageBien: 'usageBien',
  isBati: 'isBati',
  articleNature: 'articleNature',
  nature: 'nature',
  nomBatiment: 'nomBatiment',
  adresse: 'adresse',
  cptAdresse: 'cptAdresse',
  codePostal: 'codePostal',
  ville: 'ville',
  departement: 'departement',
  pays: 'pays',
  numeroLot: 'numeroLot',
  niveau: 'niveau',
  etage: 'etage',
  sectionCadastrale: 'sectionCadastrale',
  parcelle: 'parcelle',
  anneeConstruction: 'anneeConstruction',
  anneePermisConstruire: 'anneePermisConstruire',
  entree: 'entree',
  escalier: 'escalier',
  porte: 'porte',
  nbLocaux: 'nbLocaux',
  nbNiveaux: 'nbNiveaux',
  quotePart: 'quotePart',
  quotePartTotale: 'quotePartTotale',
  digicode: 'digicode',
  categorieRAAA: 'categorieRAAA',
  isMitoyen: 'isMitoyen',
  isIOP: 'isIOP',
  isERP: 'isERP',
  typeERP: 'typeERP',
  catERP: 'catERP',
  isIGH: 'isIGH',
  isAlimGazVille: 'isAlimGazVille',
  isChauffageCollectif: 'isChauffageCollectif',
  isEcsCollectif: 'isEcsCollectif',
  occupant: 'occupant',
  dateCre: 'dateCre',
  dateMaj: 'dateMaj',
  dateSup: 'dateSup',
  IdUserCre: 'IdUserCre',
  idUserMaj: 'idUserMaj',
  idUserSup: 'idUserSup',
  dateArchive: 'dateArchive',
  idResCroquisBuilder: 'idResCroquisBuilder',
  idResMemoVocal: 'idResMemoVocal',
  idResPhoto: 'idResPhoto',
  previewDataPhoto: 'previewDataPhoto',
  titrePhoto: 'titrePhoto',
  RefSync: 'RefSync',
  guidSdl: 'guidSdl',
  ChangeTime: 'ChangeTime',
  LastSyncTime: 'LastSyncTime',
  idPub: 'idPub',
  datePub: 'datePub',
  statusPub: 'statusPub',
  migratedData: 'migratedData',
  DateLastRN: 'DateLastRN',
  DateLastES: 'DateLastES',
  idUserLastRN: 'idUserLastRN',
  idUserLastES: 'idUserLastES',
  tarifOM: 'tarifOM',
  isExpirationNomade: 'isExpirationNomade',
  DateLastRNdata: 'DateLastRNdata',
  DateLastESdata: 'DateLastESdata',
  tempsIntervention: 'tempsIntervention',
  isReglementSurSite: 'isReglementSurSite',
  moyenPaiement: 'moyenPaiement',
  numeroCheque: 'numeroCheque',
  banqueCheque: 'banqueCheque',
  typeCB: 'typeCB',
  numeroCB: 'numeroCB',
  dateExpCB: 'dateExpCB',
  cryptoCB: 'cryptoCB',
  numPermisConstruire: 'numPermisConstruire',
  isPermisGroupe: 'isPermisGroupe',
  dateArchiveData: 'dateArchiveData',
  isArchivable: 'isArchivable',
  numVoie: 'numVoie',
  cptNumVoie: 'cptNumVoie',
  typeVoie: 'typeVoie',
  codeInsee: 'codeInsee',
  anneeRehabilitation: 'anneeRehabilitation',
  latitude: 'latitude',
  longitude: 'longitude',
  jeuMatrice: 'jeuMatrice',
  nbCles: 'nbCles',
  infoCles: 'infoCles',
  priorite: 'priorite',
  isAPO: 'isAPO',
  etapeAPO: 'etapeAPO',
  statutAPO: 'statutAPO',
  dateStartAPO: 'dateStartAPO',
  dateFinAPO: 'dateFinAPO',
  idContrat: 'idContrat',
  justifOccupant: 'justifOccupant',
  natureTravaux: 'natureTravaux',
  idSociete: 'idSociete',
  idSocieteIntervention: 'idSocieteIntervention',
  idSiteGestionIntervention: 'idSiteGestionIntervention',
  numeroSociete: 'numeroSociete',
  nbAnxCroquisDynamique: 'nbAnxCroquisDynamique',
  idFiscal: 'idFiscal',
  categorieBien: 'categorieBien',
  poids: 'poids',
  largeur: 'largeur',
  longueur: 'longueur',
  hauteur: 'hauteur',
  constructeur: 'constructeur',
  surface: 'surface',
  volume: 'volume',
  uniteVolume: 'uniteVolume',
  commentaireIntervention: 'commentaireIntervention',
  idMPOM: 'idMPOM',
  idMPPG: 'idMPPG',
  idMPNS: 'idMPNS',
  SiaResultMLAD: 'SiaResultMLAD',
  SiaResultRAA: 'SiaResultRAA',
  numCopro: 'numCopro',
  infoBAN: 'infoBAN'
});

exports.Prisma.StatutDossierScalarFieldEnum = makeEnum({
  idStatut: 'idStatut',
  intitule: 'intitule',
  ordre: 'ordre',
  statutAuto: 'statutAuto',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  Dossier: 'Dossier',
  StatutDossier: 'StatutDossier'
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
