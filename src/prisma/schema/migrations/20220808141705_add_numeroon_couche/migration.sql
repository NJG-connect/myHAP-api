BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Couche] ADD [bonCommandeLabo] NVARCHAR(1000),
[laboratoire] NVARCHAR(1000),
[numero] INT;

-- AlterTable
ALTER TABLE [dbo].[Prelevement] ADD [numero] INT;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
