/*
  Warnings:

  - You are about to alter the column `latitude` on the `Prelevement` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `Float(53)`.
  - You are about to alter the column `longitude` on the `Prelevement` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `Float(53)`.
  - You are about to alter the column `altitude` on the `Prelevement` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `Float(53)`.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Prelevement] ALTER COLUMN [latitude] FLOAT(53) NULL;
ALTER TABLE [dbo].[Prelevement] ALTER COLUMN [longitude] FLOAT(53) NULL;
ALTER TABLE [dbo].[Prelevement] ALTER COLUMN [altitude] FLOAT(53) NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
