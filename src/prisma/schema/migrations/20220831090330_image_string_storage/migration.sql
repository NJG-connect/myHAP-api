BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Couche] ADD [parkMakerImage] NVARCHAR(max);

-- AlterTable
ALTER TABLE [dbo].[Prelevement] ADD [lineaireImage] NVARCHAR(max),
[mesureImage] NVARCHAR(max),
[prelevementImage] NVARCHAR(max);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
