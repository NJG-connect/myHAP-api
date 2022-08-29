/*
  Warnings:

  - You are about to alter the column `docs` on the `Dossier` table. The data in that column could be lost. The data in that column will be cast from `VarChar(Max)` to `NVarChar(Max)`.
  - You are about to alter the column `zones` on the `Intervention` table. The data in that column could be lost. The data in that column will be cast from `VarChar(Max)` to `NVarChar(Max)`.
  - You are about to alter the column `zone` on the `Prelevement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(Max)` to `NVarChar(Max)`.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Dossier] ALTER COLUMN [docs] NVARCHAR(max) NULL;

-- AlterTable
ALTER TABLE [dbo].[Intervention] ALTER COLUMN [zones] NVARCHAR(max) NULL;

-- AlterTable
ALTER TABLE [dbo].[Prelevement] ALTER COLUMN [zone] NVARCHAR(max) NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
