CREATE TRIGGER updateInfoDossier 

ON ADN_DIAG.dbo.Dossier   

AFTER UPDATE

AS BEGIN 

 DECLARE
@idDossier INT,
@idEmployeIntervention INT,
@dateDebutMission DATETIME,
@dateFinMission DATETIME;

SELECT @idDossier= INSERTED.idDossier,
        @idEmployeIntervention= INSERTED.idEmployeIntervention,
        @dateDebutMission = INSERTED.dateDebutMission,
        @dateFinMission = INSERTED.dateFinMission 
        FROM INSERTED;

UPDATE  ADN_FMDC.dbo.Intervention
SET dateDebutMission = @dateDebutMission,
    dateFinMission= @dateFinMission,
  idEmployeIntervention = @idEmployeIntervention
WHERE idDossier = @idDossier AND isFirstIntervention = 1

END



-- UPDATE  ADN_DIAG.dbo.Dossier
-- SET idEmployeIntervention = 20
-- WHERE numero = 1008135
