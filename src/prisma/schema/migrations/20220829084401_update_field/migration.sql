/*
  Warnings:

  - You are about to alter the column `taille` on the `Couche` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `Int`.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Couche] ALTER COLUMN [taille] INT NULL;
ALTER TABLE [dbo].[Couche] ADD [granulat] BIT,
[liant] BIT,
[updatedAt] DATETIME2 NOT NULL CONSTRAINT [Couche_updatedAt_df] DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE [dbo].[Intervention] ADD [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Intervention_updatedAt_df] DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE [dbo].[Prelevement] ADD [codePostal] INT,
[departement] NVARCHAR(1000),
[updatedAt] DATETIME2 NOT NULL CONSTRAINT [Prelevement_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
[ville] NVARCHAR(1000);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
