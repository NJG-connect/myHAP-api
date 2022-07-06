export enum FileType {
  "ANNEXE" = "ANNEXE",
  "PRE_RAPPORT" = "PRE_RAPPORT",
  "RAPPORT" = "RAPPORT",
  "PLAN" = "PLAN",
  "DICT" = "DICT",
  "INTERVENTION" = "INTERVENTION",
}

export const FileTypeName: { [key in FileType]: string } = {
  [FileType.ANNEXE]: "Annexe",
  [FileType.PRE_RAPPORT]: "Pre-rapport",
  [FileType.RAPPORT]: "Rapport",
  [FileType.PLAN]: "Plan",
  [FileType.DICT]: "Dict",
  [FileType.INTERVENTION]: "Intervention",
};

export const FileEmplacement = {
  [FileType.ANNEXE]: "",
  [FileType.PRE_RAPPORT]: "",
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
  date: Date;
}
