
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

exports.Prisma.BienScalarFieldEnum = makeEnum({
  idBien: 'idBien',
  discBien: 'discBien',
  idSite: 'idSite',
  idBatiment: 'idBatiment',
  idLotParent: 'idLotParent',
  code: 'code',
  codeICS: 'codeICS',
  typeProprieteBatiment: 'typeProprieteBatiment',
  usage: 'usage',
  isBati: 'isBati',
  articleNature: 'articleNature',
  nature: 'nature',
  nom: 'nom',
  ordre: 'ordre',
  numeroLot: 'numeroLot',
  niveau: 'niveau',
  etage: 'etage',
  sectionCadastrale: 'sectionCadastrale',
  parcelle: 'parcelle',
  anneeConstruction: 'anneeConstruction',
  anneePermisConstruire: 'anneePermisConstruire',
  batiment: 'batiment',
  escalier: 'escalier',
  porte: 'porte',
  surface: 'surface',
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
  inclureNomDansAdresse: 'inclureNomDansAdresse',
  dateCre: 'dateCre',
  dateMaj: 'dateMaj',
  dateSup: 'dateSup',
  IdUserCre: 'IdUserCre',
  idUserMaj: 'idUserMaj',
  idUserSup: 'idUserSup',
  commentaire: 'commentaire',
  idResPhoto: 'idResPhoto',
  previewDataPhoto: 'previewDataPhoto',
  titrePhoto: 'titrePhoto',
  idSdl: 'idSdl',
  ChangeTime: 'ChangeTime',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  numPermisConstruire: 'numPermisConstruire',
  isPermisGroupe: 'isPermisGroupe',
  anneeRehabilitation: 'anneeRehabilitation',
  latitude: 'latitude',
  longitude: 'longitude',
  idFiscal: 'idFiscal',
  categorieBien: 'categorieBien',
  poids: 'poids',
  largeur: 'largeur',
  longueur: 'longueur',
  hauteur: 'hauteur',
  constructeur: 'constructeur',
  volume: 'volume',
  uniteVolume: 'uniteVolume',
  numCopro: 'numCopro'
});

exports.Prisma.BienParamScalarFieldEnum = makeEnum({
  idParam: 'idParam',
  defautDescBatHabPP: 'defautDescBatHabPP',
  defautDescBatAutre: 'defautDescBatAutre',
  defautDescNBatAutre: 'defautDescNBatAutre',
  defautDescBatLotHabPP: 'defautDescBatLotHabPP',
  defautDescNBatLotAutre: 'defautDescNBatLotAutre',
  defautDescDependance: 'defautDescDependance',
  formatCodeSite: 'formatCodeSite',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.CadrePrestationScalarFieldEnum = makeEnum({
  IdCadrePrestation: 'IdCadrePrestation',
  idSecteurActivite: 'idSecteurActivite',
  intitule: 'intitule',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  isPerso: 'isPerso',
  dateFin: 'dateFin'
});

exports.Prisma.CategoriePrestationScalarFieldEnum = makeEnum({
  idCategoriePrestation: 'idCategoriePrestation',
  idSecteurActivite: 'idSecteurActivite',
  intitule: 'intitule',
  intituleCourt: 'intituleCourt',
  suffixeRefRapport: 'suffixeRefRapport',
  ordre: 'ordre',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  isPerso: 'isPerso',
  dateFin: 'dateFin'
});

exports.Prisma.CategorieRdvScalarFieldEnum = makeEnum({
  idCategorieRdv: 'idCategorieRdv',
  idSecteurActivite: 'idSecteurActivite',
  intitule: 'intitule',
  couleurRGB: 'couleurRGB',
  dureeRdvMinute: 'dureeRdvMinute',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  WebSyncMode: 'WebSyncMode'
});

exports.Prisma.CompetenceScalarFieldEnum = makeEnum({
  idEmploye: 'idEmploye',
  idCategoriePrestation: 'idCategoriePrestation',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.CompteurScalarFieldEnum = makeEnum({
  idSociete: 'idSociete',
  idCompteur: 'idCompteur',
  valeur: 'valeur'
});

exports.Prisma.CompteWebScalarFieldEnum = makeEnum({
  idCompteWeb: 'idCompteWeb',
  typeCompte: 'typeCompte',
  discCompte: 'discCompte',
  idSociete: 'idSociete',
  idEmploye: 'idEmploye',
  baseUrl: 'baseUrl',
  login: 'login',
  encryptedMdp: 'encryptedMdp',
  customField1: 'customField1',
  customField2: 'customField2',
  customField3: 'customField3',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  customField4: 'customField4',
  customField5: 'customField5',
  customField6: 'customField6',
  customField7: 'customField7'
});

exports.Prisma.ContactScalarFieldEnum = makeEnum({
  idContact: 'idContact',
  idInterlocuteur: 'idInterlocuteur',
  fonction: 'fonction',
  titreContact: 'titreContact',
  nomContact: 'nomContact',
  prenomContact: 'prenomContact',
  telephoneFixe: 'telephoneFixe',
  telephoneIP: 'telephoneIP',
  telephonePortable: 'telephonePortable',
  email: 'email',
  fax: 'fax',
  isDefaut: 'isDefaut',
  idSdl: 'idSdl',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  dateFin: 'dateFin',
  idMigrationInterlocuteur: 'idMigrationInterlocuteur'
});

exports.Prisma.ContratScalarFieldEnum = makeEnum({
  idContrat: 'idContrat',
  idInterlocuteur: 'idInterlocuteur',
  idSiteGestion: 'idSiteGestion',
  idSite: 'idSite',
  numero: 'numero',
  reference: 'reference',
  referenceExt: 'referenceExt',
  dateDebutContrat: 'dateDebutContrat',
  dateFinContrat: 'dateFinContrat',
  intitule: 'intitule',
  programme: 'programme',
  commentaire: 'commentaire',
  InsertTime: 'InsertTime',
  UpdateTime: 'UpdateTime',
  idUserCre: 'idUserCre',
  idUserMaj: 'idUserMaj',
  idUserDesactivation: 'idUserDesactivation',
  dateDesactivation: 'dateDesactivation',
  idEmployeGestion: 'idEmployeGestion',
  dateSignature: 'dateSignature',
  dateAvenant: 'dateAvenant',
  idSociete: 'idSociete',
  numeroSociete: 'numeroSociete',
  isModeleSpecific: 'isModeleSpecific',
  codeExtDiag: 'codeExtDiag'
});

exports.Prisma.DbParamScalarFieldEnum = makeEnum({
  idBase: 'idBase',
  userNotificationDelay: 'userNotificationDelay',
  imagePreviewMaxWidth: 'imagePreviewMaxWidth',
  imagePreviewMaxHeight: 'imagePreviewMaxHeight',
  imagePreviewMaxSize: 'imagePreviewMaxSize',
  imageMaxWidth: 'imageMaxWidth',
  imageMaxHeight: 'imageMaxHeight',
  imageMaxSize: 'imageMaxSize',
  DBStructureVersion: 'DBStructureVersion',
  DBDataVersion: 'DBDataVersion',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  DBMajorVersion: 'DBMajorVersion'
});

exports.Prisma.DocumentScalarFieldEnum = makeEnum({
  idDocument: 'idDocument',
  idTypeDocument: 'idTypeDocument',
  DiscDocument: 'DiscDocument',
  idEmploye: 'idEmploye',
  idSociete: 'idSociete',
  idInterlocuteur: 'idInterlocuteur',
  idResDocument: 'idResDocument',
  titreDocument: 'titreDocument',
  previewDataDocument: 'previewDataDocument',
  numero: 'numero',
  organisme: 'organisme',
  date: 'date',
  dateExpiration: 'dateExpiration',
  commentaire: 'commentaire',
  dateFin: 'dateFin',
  ordre: 'ordre',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  idMachinePlomb: 'idMachinePlomb',
  idMachineIFT: 'idMachineIFT',
  isUseDateParMission: 'isUseDateParMission',
  numero2: 'numero2',
  date2: 'date2',
  dateExpiration2: 'dateExpiration2'
});

exports.Prisma.DomaineActiviteScalarFieldEnum = makeEnum({
  idDomaine: 'idDomaine',
  intitule: 'intitule',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.DroitScalarFieldEnum = makeEnum({
  idDroit: 'idDroit',
  produit: 'produit',
  zoneProduit: 'zoneProduit',
  description: 'description',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  restrictionNomade: 'restrictionNomade',
  zoneModule: 'zoneModule',
  typeDroit: 'typeDroit',
  defaultValue: 'defaultValue'
});

exports.Prisma.EmployeScalarFieldEnum = makeEnum({
  idEmploye: 'idEmploye',
  idSociete: 'idSociete',
  idService: 'idService',
  discService: 'discService',
  idFonction: 'idFonction',
  discFonction: 'discFonction',
  isIntervenant: 'isIntervenant',
  isResponsable: 'isResponsable',
  titre: 'titre',
  nom: 'nom',
  prenom: 'prenom',
  numeroFixe: 'numeroFixe',
  numeroPortable: 'numeroPortable',
  numeroFax: 'numeroFax',
  mail: 'mail',
  idResSignature: 'idResSignature',
  titreSignature: 'titreSignature',
  previewDataSignature: 'previewDataSignature',
  cleSignature: 'cleSignature',
  dateCre: 'dateCre',
  dateMaj: 'dateMaj',
  dateSup: 'dateSup',
  numeroProFixe: 'numeroProFixe',
  numeroProPort: 'numeroProPort',
  numeroProIp: 'numeroProIp',
  numeroProFax: 'numeroProFax',
  mailPro: 'mailPro',
  adresse1: 'adresse1',
  adresse2: 'adresse2',
  codePostal: 'codePostal',
  ville: 'ville',
  departement: 'departement',
  pays: 'pays',
  idResPhoto: 'idResPhoto',
  previewDataPhoto: 'previewDataPhoto',
  couleurRdvHexa: 'couleurRdvHexa',
  couleurRdvRGB: 'couleurRdvRGB',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  isCommercial: 'isCommercial',
  loginAdeme: 'loginAdeme',
  mdpAdeme: 'mdpAdeme',
  matricule: 'matricule',
  IdSiege: 'IdSiege'
});

exports.Prisma.EnumDescriptifBienScalarFieldEnum = makeEnum({
  idDescriptif: 'idDescriptif',
  intitule: 'intitule',
  isBatiment: 'isBatiment',
  isPartieBatiment: 'isPartieBatiment',
  usage: 'usage',
  PP: 'PP',
  PC: 'PC',
  isBati: 'isBati',
  isDependance: 'isDependance',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  categorieBien: 'categorieBien'
});

exports.Prisma.EnumEtageScalarFieldEnum = makeEnum({
  idEtage: 'idEtage',
  intitule: 'intitule',
  intituleAbrege: 'intituleAbrege',
  niveau: 'niveau',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  categorieBien: 'categorieBien'
});

exports.Prisma.EnumFAIScalarFieldEnum = makeEnum({
  idFAI: 'idFAI',
  nom: 'nom',
  serveurSmtp: 'serveurSmtp',
  portSmtp: 'portSmtp',
  isSSL: 'isSSL',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.EnumFamQualiteScalarFieldEnum = makeEnum({
  idFamQualite: 'idFamQualite',
  intitule: 'intitule',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.EnumLdcBienScalarFieldEnum = makeEnum({
  idEnumLdcBien: 'idEnumLdcBien',
  discLdc: 'discLdc',
  intitule: 'intitule',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.EnumLoiScalarFieldEnum = makeEnum({
  idLoi: 'idLoi',
  idCategorieMission: 'idCategorieMission',
  intitule: 'intitule',
  texteLoi: 'texteLoi',
  isObsolete: 'isObsolete',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  texteLoiRtf: 'texteLoiRtf'
});

exports.Prisma.EnumTitreScalarFieldEnum = makeEnum({
  IdTitre: 'IdTitre',
  typePersonne: 'typePersonne',
  titre: 'titre',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.EnumTypeRapportScalarFieldEnum = makeEnum({
  idTypeRapport: 'idTypeRapport',
  productCode: 'productCode',
  reportType: 'reportType',
  reportSubType: 'reportSubType',
  idCategorieMission: 'idCategorieMission',
  idTypeMission: 'idTypeMission',
  idCadreMission: 'idCadreMission',
  intitule: 'intitule',
  titreRapport: 'titreRapport',
  isConcerneMI: 'isConcerneMI',
  isConcerneIC: 'isConcerneIC',
  isConcernePP: 'isConcernePP',
  isConcernePC: 'isConcernePC',
  isConcerneHAB: 'isConcerneHAB',
  isConcerneTER: 'isConcerneTER',
  isConcerneERP: 'isConcerneERP',
  conditionReperage: 'conditionReperage',
  note: 'note',
  dureeValiditeMois: 'dureeValiditeMois',
  texteLoi: 'texteLoi',
  idLoi: 'idLoi',
  isRapportMission: 'isRapportMission',
  isPublier: 'isPublier',
  isSigner: 'isSigner',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  isSelectionDefaut: 'isSelectionDefaut',
  isEnrPDFNomade: 'isEnrPDFNomade',
  isEnrPDF: 'isEnrPDF',
  idNorme: 'idNorme',
  ecartDefaut: 'ecartDefaut',
  isAPO: 'isAPO',
  isAPOGeneration: 'isAPOGeneration',
  dateFin: 'dateFin',
  idModelePerso: 'idModelePerso',
  idContrat: 'idContrat',
  isBati: 'isBati',
  isConcerneRoute: 'isConcerneRoute',
  categorieBien: 'categorieBien',
  customFileFormat: 'customFileFormat',
  typeRapportExt: 'typeRapportExt'
});

exports.Prisma.EnumVilleScalarFieldEnum = makeEnum({
  idVille: 'idVille',
  Commune: 'Commune',
  Codepos: 'Codepos',
  Departement: 'Departement',
  INSEE: 'INSEE',
  idPays: 'idPays',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.FonctionScalarFieldEnum = makeEnum({
  idFonction: 'idFonction',
  discFonction: 'discFonction',
  idService: 'idService',
  discService: 'discService',
  intitule: 'intitule',
  isVerrou: 'isVerrou',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.GroupeUtilisateurScalarFieldEnum = makeEnum({
  idGroupeUtilisateur: 'idGroupeUtilisateur',
  nom: 'nom',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.InterlocuteurScalarFieldEnum = makeEnum({
  idInterlocuteur: 'idInterlocuteur',
  idSiteGestion: 'idSiteGestion',
  catInterlocuteur: 'catInterlocuteur',
  code: 'code',
  codeICS: 'codeICS',
  typePersonne: 'typePersonne',
  idQualite: 'idQualite',
  titre: 'titre',
  nom: 'nom',
  prenom: 'prenom',
  adresse1: 'adresse1',
  adresse2: 'adresse2',
  codePostal: 'codePostal',
  ville: 'ville',
  departement: 'departement',
  idPays: 'idPays',
  telephoneFixe: 'telephoneFixe',
  telephoneIP: 'telephoneIP',
  telephoneMobile: 'telephoneMobile',
  fax: 'fax',
  email: 'email',
  siteWeb: 'siteWeb',
  txComDefaut: 'txComDefaut',
  commentaire: 'commentaire',
  origine: 'origine',
  dateCre: 'dateCre',
  dateMaj: 'dateMaj',
  dateSup: 'dateSup',
  IdUserCre: 'IdUserCre',
  idUserMaj: 'idUserMaj',
  idUserSup: 'idUserSup',
  idOrigine: 'idOrigine',
  detailOrigine: 'detailOrigine',
  idSdl: 'idSdl',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  idPub: 'idPub',
  datePub: 'datePub',
  statusPub: 'statusPub',
  migratedData: 'migratedData',
  idResponsable: 'idResponsable',
  isSync: 'isSync',
  isInactif: 'isInactif',
  numAccreditation: 'numAccreditation',
  heurePMDebut: 'heurePMDebut',
  heurePMFin: 'heurePMFin',
  heureAMDebut: 'heureAMDebut',
  heureAMFin: 'heureAMFin',
  discWebLabo: 'discWebLabo',
  codExt: 'codExt',
  idSociete: 'idSociete',
  isMailLabo: 'isMailLabo',
  idGestionnaire: 'idGestionnaire',
  idDocumentAccreditation: 'idDocumentAccreditation',
  codeExtDiag: 'codeExtDiag',
  infoBAN: 'infoBAN'
});

exports.Prisma.MDI_EnqueteExclusionScalarFieldEnum = makeEnum({
  idEnqueteExclusion: 'idEnqueteExclusion',
  idContact: 'idContact',
  idInterlocuteur: 'idInterlocuteur',
  isactif: 'isactif',
  email: 'email'
});

exports.Prisma.MDI_EnumEnqueteScalarFieldEnum = makeEnum({
  idEnumEnquete: 'idEnumEnquete',
  isactif: 'isactif',
  isdefaut: 'isdefaut',
  descrip: 'descrip',
  objmail: 'objmail',
  fichiermail: 'fichiermail',
  permalien: 'permalien'
});

exports.Prisma.OrigineInterlocuteurScalarFieldEnum = makeEnum({
  idOrigine: 'idOrigine',
  intitule: 'intitule',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.ParamContratScalarFieldEnum = makeEnum({
  idParametre: 'idParametre',
  idContrat: 'idContrat',
  zone: 'zone',
  intitule: 'intitule',
  valeur: 'valeur',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.ParamGenericScalarFieldEnum = makeEnum({
  idParametre: 'idParametre',
  zone: 'zone',
  intitule: 'intitule',
  valeur: 'valeur',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.ParamLogScalarFieldEnum = makeEnum({
  tableName: 'tableName',
  date: 'date',
  SentAnchor: 'SentAnchor',
  ReceivedAnchor: 'ReceivedAnchor'
});

exports.Prisma.ParamMailingScalarFieldEnum = makeEnum({
  idParamMailing: 'idParamMailing',
  adresseMail: 'adresseMail',
  nomFAI: 'nomFAI',
  serveurSmtp: 'serveurSmtp',
  Port: 'Port',
  idMessagerie: 'idMessagerie',
  mdpMessagerie: 'mdpMessagerie',
  isAuthentificationSSL: 'isAuthentificationSSL',
  isDefautAccount: 'isDefautAccount',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.ParamMailModeleScalarFieldEnum = makeEnum({
  idModele: 'idModele',
  productCode: 'productCode',
  titre: 'titre',
  texte: 'texte',
  isDefaut: 'isDefaut',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  intitule: 'intitule',
  dscModele: 'dscModele'
});

exports.Prisma.PaysScalarFieldEnum = makeEnum({
  idPays: 'idPays',
  intitule: 'intitule',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.ProcessLogScalarFieldEnum = makeEnum({
  idProcessLog: 'idProcessLog',
  idProcessLogParent: 'idProcessLogParent',
  produit: 'produit',
  typeProcess: 'typeProcess',
  code: 'code',
  intitule: 'intitule',
  dateDebut: 'dateDebut',
  dateFin: 'dateFin',
  statut: 'statut',
  dateCreation: 'dateCreation',
  idUserCreation: 'idUserCreation',
  dateMaj: 'dateMaj',
  processConfigData: 'processConfigData',
  processConfigVersion: 'processConfigVersion',
  errorLog: 'errorLog'
});

exports.Prisma.ProcessLogItemScalarFieldEnum = makeEnum({
  idProcessLogItem: 'idProcessLogItem',
  idProcessLog: 'idProcessLog',
  itemSourceId: 'itemSourceId',
  itemSourceName: 'itemSourceName',
  itemCibleId: 'itemCibleId',
  itemCibleName: 'itemCibleName',
  dateDebut: 'dateDebut',
  dateFin: 'dateFin',
  statut: 'statut',
  errorLog: 'errorLog'
});

exports.Prisma.QualiteScalarFieldEnum = makeEnum({
  idQualite: 'idQualite',
  idFamQualite: 'idFamQualite',
  typePersonne: 'typePersonne',
  libelleQualite: 'libelleQualite',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.RdvScalarFieldEnum = makeEnum({
  idRdv: 'idRdv',
  idEmploye: 'idEmploye',
  idCategorieRdv: 'idCategorieRdv',
  sujet: 'sujet',
  dateDebut: 'dateDebut',
  dateFin: 'dateFin',
  description: 'description',
  typeLien: 'typeLien',
  recurrence: 'recurrence',
  isVerrou: 'isVerrou',
  idSdl: 'idSdl',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  idInterlocuteur: 'idInterlocuteur',
  idBien: 'idBien',
  adresse: 'adresse'
});

exports.Prisma.RelDocument_CatPrestationScalarFieldEnum = makeEnum({
  idDocument: 'idDocument',
  idCategoriePrestation: 'idCategoriePrestation',
  isGenRapportDefaut: 'isGenRapportDefaut',
  isGenSyntheseDefaut: 'isGenSyntheseDefaut',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  dateDebut: 'dateDebut',
  dateExpiration: 'dateExpiration'
});

exports.Prisma.RelInterlocuteurBienScalarFieldEnum = makeEnum({
  idRelInterlocuteurBien: 'idRelInterlocuteurBien',
  idSite: 'idSite',
  idBien: 'idBien',
  idInterlocuteur: 'idInterlocuteur',
  idRoleInterlocuteurBien: 'idRoleInterlocuteurBien',
  dateFin: 'dateFin',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.RelInterlocuteurContactScalarFieldEnum = makeEnum({
  idRelInterlocuteurContact: 'idRelInterlocuteurContact',
  idInterlocuteur: 'idInterlocuteur',
  idContact: 'idContact',
  idService: 'idService',
  typeContact: 'typeContact',
  InsertTime: 'InsertTime',
  UpdateTime: 'UpdateTime',
  dateFin: 'dateFin',
  isDefaut: 'isDefaut',
  fonction: 'fonction',
  idSdl: 'idSdl'
});

exports.Prisma.RelServiceInterlocuteurCadreScalarFieldEnum = makeEnum({
  idServiceInterlocuteur: 'idServiceInterlocuteur',
  idCadrePrestation: 'idCadrePrestation',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.RestrictionGroupeUtilisateurScalarFieldEnum = makeEnum({
  idGroupeUtilisateur: 'idGroupeUtilisateur',
  idDroit: 'idDroit',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  isActif: 'isActif'
});

exports.Prisma.RestrictionsUtilisateurScalarFieldEnum = makeEnum({
  idUtilisateur: 'idUtilisateur',
  idDroit: 'idDroit',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  isActif: 'isActif'
});

exports.Prisma.RoleInterlocuteurBienScalarFieldEnum = makeEnum({
  idRoleInterlocuteurBien: 'idRoleInterlocuteurBien',
  intitule: 'intitule',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.SecteurActiviteScalarFieldEnum = makeEnum({
  idSecteurActivite: 'idSecteurActivite',
  idDomaine: 'idDomaine',
  intitule: 'intitule',
  isVerrou: 'isVerrou',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.ServiceScalarFieldEnum = makeEnum({
  idService: 'idService',
  discService: 'discService',
  intitule: 'intitule',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.ServiceInterlocuteurScalarFieldEnum = makeEnum({
  idServiceInterlocuteur: 'idServiceInterlocuteur',
  idInterlocuteur: 'idInterlocuteur',
  nom: 'nom',
  telephone: 'telephone',
  fax: 'fax',
  email: 'email',
  isDefaut: 'isDefaut',
  idfamillearticle: 'idfamillearticle',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  heurePMDebut: 'heurePMDebut',
  heurePMFin: 'heurePMFin',
  heureAMDebut: 'heureAMDebut',
  heureAMFin: 'heureAMFin',
  idSdl: 'idSdl',
  codeService: 'codeService'
});

exports.Prisma.SignatureScalarFieldEnum = makeEnum({
  idSignature: 'idSignature',
  nomSignataire: 'nomSignataire',
  certificat: 'certificat',
  type: 'type',
  motif: 'motif',
  isDefaut: 'isDefaut',
  idEmploye: 'idEmploye',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.SiteScalarFieldEnum = makeEnum({
  idSite: 'idSite',
  code: 'code',
  typeProprieteSite: 'typeProprieteSite',
  usage: 'usage',
  numVoie: 'numVoie',
  cptNumVoie: 'cptNumVoie',
  typeVoie: 'typeVoie',
  nomVoie: 'nomVoie',
  cptAdresse: 'cptAdresse',
  codePostal: 'codePostal',
  ville: 'ville',
  departement: 'departement',
  pays: 'pays',
  quotePartTotale: 'quotePartTotale',
  digicode: 'digicode',
  dateCre: 'dateCre',
  dateMaj: 'dateMaj',
  dateSup: 'dateSup',
  IdUserCre: 'IdUserCre',
  idUserMaj: 'idUserMaj',
  idUserSup: 'idUserSup',
  idSdl: 'idSdl',
  ChangeTime: 'ChangeTime',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  codeInsee: 'codeInsee',
  latitude: 'latitude',
  longitude: 'longitude',
  infoBAN: 'infoBAN',
  numCopro: 'numCopro'
});

exports.Prisma.SocieteScalarFieldEnum = makeEnum({
  idSociete: 'idSociete',
  intitule: 'intitule',
  nom: 'nom',
  idSiege: 'idSiege',
  statut: 'statut',
  activite: 'activite',
  adresse1: 'adresse1',
  adresse2: 'adresse2',
  codePostal: 'codePostal',
  ville: 'ville',
  departement: 'departement',
  pays: 'pays',
  telephoneFixe: 'telephoneFixe',
  fax: 'fax',
  email: 'email',
  siteWeb: 'siteWeb',
  nomContact: 'nomContact',
  prenomContact: 'prenomContact',
  fonction: 'fonction',
  telephoneContact: 'telephoneContact',
  faxContact: 'faxContact',
  emailContact: 'emailContact',
  notesContact: 'notesContact',
  numeroIdentification: 'numeroIdentification',
  numeroSiret: 'numeroSiret',
  numeroTva: 'numeroTva',
  codeAPE: 'codeAPE',
  capitalSocial: 'capitalSocial',
  policeAssurance: 'policeAssurance',
  isGenInfosSiege: 'isGenInfosSiege',
  idResLogo: 'idResLogo',
  previewDataLogo: 'previewDataLogo',
  dateFin: 'dateFin',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  outputPath: 'outputPath',
  templatePath: 'templatePath',
  defaultTemplateSet: 'defaultTemplateSet',
  isGroupByIntitule: 'isGroupByIntitule',
  oldOutputPath: 'oldOutputPath',
  isLimiterListeEmploye: 'isLimiterListeEmploye',
  isLimiterListeInterlocuteur: 'isLimiterListeInterlocuteur',
  isLimiterListeArticle: 'isLimiterListeArticle',
  idResTampon: 'idResTampon',
  previewDataTampon: 'previewDataTampon',
  numeroRCS: 'numeroRCS',
  adresse1EP: 'adresse1EP',
  adresse2EP: 'adresse2EP',
  codePostalEP: 'codePostalEP',
  villeEP: 'villeEP',
  departementEP: 'departementEP',
  paysEP: 'paysEP',
  telephoneFixeEP: 'telephoneFixeEP',
  faxEP: 'faxEP',
  emailEP: 'emailEP',
  siteWebEP: 'siteWebEP',
  isAdresseEPSpecific: 'isAdresseEPSpecific',
  codeInterne: 'codeInterne'
});

exports.Prisma.SuiviInterlocuteurScalarFieldEnum = makeEnum({
  idSuivi: 'idSuivi',
  typeSuivi: 'typeSuivi',
  info: 'info',
  idInterlocuteur: 'idInterlocuteur',
  idEmploye: 'idEmploye',
  dateCre: 'dateCre',
  dateMaj: 'dateMaj',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.TypeDocumentScalarFieldEnum = makeEnum({
  idTypeDocument: 'idTypeDocument',
  DiscDocument: 'DiscDocument',
  intitule: 'intitule',
  isVerrou: 'isVerrou',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.TypePrestationScalarFieldEnum = makeEnum({
  idCategoriePrestation: 'idCategoriePrestation',
  idTypePrestation: 'idTypePrestation',
  intitule: 'intitule',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  dateFin: 'dateFin'
});

exports.Prisma.UtilisateurScalarFieldEnum = makeEnum({
  idUtilisateur: 'idUtilisateur',
  idGroupeUtilisateur: 'idGroupeUtilisateur',
  idSocieteDefaut: 'idSocieteDefaut',
  idEmploye: 'idEmploye',
  typeUtilisateur: 'typeUtilisateur',
  login: 'login',
  mdp: 'mdp',
  dateCre: 'dateCre',
  dateMaj: 'dateMaj',
  dateSup: 'dateSup',
  layoutAccueil: 'layoutAccueil',
  layoutDossier: 'layoutDossier',
  layoutCroquisBuilder: 'layoutCroquisBuilder',
  lastNotification: 'lastNotification',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime',
  idSiege: 'idSiege',
  layoutAccueilNomade: 'layoutAccueilNomade'
});

exports.Prisma.ValidateurSaisieScalarFieldEnum = makeEnum({
  idValidateurSaisie: 'idValidateurSaisie',
  productCode: 'productCode',
  idCategorieMission: 'idCategorieMission',
  idTypeMission: 'idTypeMission',
  idCadreMission: 'idCadreMission',
  intitule: 'intitule',
  description: 'description',
  isActif: 'isActif',
  isObligatoire: 'isObligatoire',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.VerrouScalarFieldEnum = makeEnum({
  objectType: 'objectType',
  objectId: 'objectId',
  idUtilisateur: 'idUtilisateur',
  dateVerrou: 'dateVerrou'
});

exports.Prisma.VersionScalarFieldEnum = makeEnum({
  idVersion: 'idVersion',
  DBMajorVersion: 'DBMajorVersion',
  DBStructureVersion: 'DBStructureVersion',
  DBDataVersion: 'DBDataVersion',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.VersionSqlNomadeScalarFieldEnum = makeEnum({
  idVersionSqlNomade: 'idVersionSqlNomade',
  idVersion: 'idVersion',
  ordre: 'ordre',
  script: 'script',
  dbName: 'dbName',
  UpdateTime: 'UpdateTime',
  InsertTime: 'InsertTime'
});

exports.Prisma.WebDataSyncScalarFieldEnum = makeEnum({
  wd_id: 'wd_id',
  wd_type: 'wd_type',
  idLocal: 'idLocal',
  idDistant: 'idDistant',
  idCompteWeb: 'idCompteWeb',
  dateLastSync: 'dateLastSync'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  Bien: 'Bien',
  BienParam: 'BienParam',
  CadrePrestation: 'CadrePrestation',
  CategoriePrestation: 'CategoriePrestation',
  CategorieRdv: 'CategorieRdv',
  Competence: 'Competence',
  Compteur: 'Compteur',
  CompteWeb: 'CompteWeb',
  Contact: 'Contact',
  Contrat: 'Contrat',
  DbParam: 'DbParam',
  Document: 'Document',
  DomaineActivite: 'DomaineActivite',
  Droit: 'Droit',
  Employe: 'Employe',
  EnumDescriptifBien: 'EnumDescriptifBien',
  EnumEtage: 'EnumEtage',
  EnumFAI: 'EnumFAI',
  EnumFamQualite: 'EnumFamQualite',
  EnumLdcBien: 'EnumLdcBien',
  EnumLoi: 'EnumLoi',
  EnumTitre: 'EnumTitre',
  EnumTypeRapport: 'EnumTypeRapport',
  EnumVille: 'EnumVille',
  Fonction: 'Fonction',
  GroupeUtilisateur: 'GroupeUtilisateur',
  Interlocuteur: 'Interlocuteur',
  MDI_EnqueteExclusion: 'MDI_EnqueteExclusion',
  MDI_EnumEnquete: 'MDI_EnumEnquete',
  OrigineInterlocuteur: 'OrigineInterlocuteur',
  ParamContrat: 'ParamContrat',
  ParamGeneric: 'ParamGeneric',
  ParamLog: 'ParamLog',
  ParamMailing: 'ParamMailing',
  ParamMailModele: 'ParamMailModele',
  Pays: 'Pays',
  ProcessLog: 'ProcessLog',
  ProcessLogItem: 'ProcessLogItem',
  Qualite: 'Qualite',
  Rdv: 'Rdv',
  RelDocument_CatPrestation: 'RelDocument_CatPrestation',
  RelInterlocuteurBien: 'RelInterlocuteurBien',
  RelInterlocuteurContact: 'RelInterlocuteurContact',
  RelServiceInterlocuteurCadre: 'RelServiceInterlocuteurCadre',
  RestrictionGroupeUtilisateur: 'RestrictionGroupeUtilisateur',
  RestrictionsUtilisateur: 'RestrictionsUtilisateur',
  RoleInterlocuteurBien: 'RoleInterlocuteurBien',
  SecteurActivite: 'SecteurActivite',
  Service: 'Service',
  ServiceInterlocuteur: 'ServiceInterlocuteur',
  Signature: 'Signature',
  Site: 'Site',
  Societe: 'Societe',
  SuiviInterlocuteur: 'SuiviInterlocuteur',
  TypeDocument: 'TypeDocument',
  TypePrestation: 'TypePrestation',
  Utilisateur: 'Utilisateur',
  ValidateurSaisie: 'ValidateurSaisie',
  Verrou: 'Verrou',
  Version: 'Version',
  VersionSqlNomade: 'VersionSqlNomade',
  WebDataSync: 'WebDataSync'
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
