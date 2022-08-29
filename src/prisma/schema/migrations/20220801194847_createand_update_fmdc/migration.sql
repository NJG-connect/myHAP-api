BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Dossier] (
    [id] INT NOT NULL,
    [isParkMarker] BIT,
    [typologie] NVARCHAR(1000),
    [docs] VARCHAR(max),
    CONSTRAINT [Dossier_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Dossier_id_key] UNIQUE NONCLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Intervention] (
    [id] INT NOT NULL IDENTITY(1,1),
    [dateDebutMission] DATETIME,
    [dateFinMission] DATETIME,
    [idEmployeIntervention] INT,
    [zones] VARCHAR(max),
    [isFirstIntervention] BIT CONSTRAINT [Intervention_isFirstIntervention_df] DEFAULT 0,
    [idDossier] INT NOT NULL,
    CONSTRAINT [Intervention_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Intervention_id_key] UNIQUE NONCLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Prelevement] (
    [id] INT NOT NULL IDENTITY(1,1),
    [date] DATETIME2,
    [emplacement] NVARCHAR(1000),
    [latitude] NVARCHAR(1000),
    [longitude] NVARCHAR(1000),
    [altitude] NVARCHAR(1000),
    [adresse] NVARCHAR(1000),
    [materiaux] NVARCHAR(1000),
    [taille] INT,
    [couleur] NVARCHAR(1000),
    [images] NVARCHAR(1000),
    [laboratoire] NVARCHAR(1000),
    [zone] VARCHAR(max),
    [resultat] NVARCHAR(1000),
    [PrelevementPossible] BIT,
    [choixPrelevementImPossible] NVARCHAR(1000),
    [idIntervention] INT,
    CONSTRAINT [Prelevement_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Prelevement_id_key] UNIQUE NONCLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Couche] (
    [id] INT NOT NULL IDENTITY(1,1),
    [taille] NVARCHAR(1000),
    [couleur] NVARCHAR(1000),
    [amiante] BIT,
    [materiaux] NVARCHAR(1000),
    [HAP] NVARCHAR(1000),
    [idPrelevement] INT,
    CONSTRAINT [Couche_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Couche_id_key] UNIQUE NONCLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Intervention] ADD CONSTRAINT [Intervention_idDossier_fkey] FOREIGN KEY ([idDossier]) REFERENCES [dbo].[Dossier]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Prelevement] ADD CONSTRAINT [Prelevement_idIntervention_fkey] FOREIGN KEY ([idIntervention]) REFERENCES [dbo].[Intervention]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Couche] ADD CONSTRAINT [Couche_idPrelevement_fkey] FOREIGN KEY ([idPrelevement]) REFERENCES [dbo].[Prelevement]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
