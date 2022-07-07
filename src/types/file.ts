export enum FileType {
  "ANNEXE" = "ANNEXE",
  "PRE_RAPPORT" = "PRE_RAPPORT",
  "RAPPORT" = "RAPPORT",
  "PLAN" = "PLAN",
  "DICT" = "DICT",
  "INTERVENTION" = "INTERVENTION",
  "DOSSIER" = "DOSSIER",
}

export const FileTypeName: { [key in FileType]: string } = {
  [FileType.ANNEXE]: "Annexe",
  [FileType.PRE_RAPPORT]: "Pre-rapport",
  [FileType.RAPPORT]: "Rapport",
  [FileType.PLAN]: "Plan",
  [FileType.DICT]: "Dict",
  [FileType.INTERVENTION]: "Intervention",
  [FileType.DOSSIER]: "Docs",
};

export const FileEmplacement: { [key in FileType]: string } = {
  [FileType.ANNEXE]: "",
  [FileType.PRE_RAPPORT]: "",
  [FileType.DOSSIER]: "",
  [FileType.RAPPORT]: "",
  [FileType.PLAN]: "/PLAN",
  [FileType.DICT]: "/DICT-ARRETE",
  [FileType.INTERVENTION]: "/PHOTO-INTERVENTION",
};

export interface FileResponseUpload {
  sucess: File[];
  errors: string[];
}

export interface File {
  name: string;
  type: string;
  emplacement: string;
  link: string;
  date: Date;
}
