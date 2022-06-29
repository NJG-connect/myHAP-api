CREATE TRIGGER triggerAddDossierForMyHAP   
ON ADN_DIAG.dbo.Dossier   
AFTER INSERT 

AS BEGIN 
 DECLARE
@idDossier INT,
@idEmployeIntervention INT,
@dateDebutMission DATETIME,
@dateFinMission DATETIME;

SELECT @idDossier= i.idDossier,
        @idEmployeIntervention= i.idEmployeIntervention,
        @dateDebutMission = i.dateDebutMission,
        @dateFinMission = i.dateFinMission
        FROM inserted i;

INSERT INTO ADN_FMDC.dbo.Dossier(id  )
VALUES(@idDossier)

INSERT INTO ADN_FMDC.dbo.Intervention(dateDebutMission,dateFinMission,idEmployeIntervention, idDossier, isFirstIntervention )
VALUES(@dateDebutMission,@dateFinMission,@idEmployeIntervention,@idDossier, 1)

END




--  create entry for test 

-- INSERT INTO ADN_DIAG.dbo.Dossier(
--     numero,
--     reference,
--     isBati,
--     isIOP,
--     isMitoyen,
--     isERP,
--     isIGH,
--     isAlimGazVille,
--     isChauffageCollectif,
--     isEcsCollectif,
--     occupant,
--     statusPub,
--     isReglementSurSite,
--     isPermisGroupe,
--     priorite,
--     isAPO,
--     idSociete,
--     idSocieteIntervention,
--     idSiteGestionIntervention
-- )
-- VALUES(
--     100814,
--     'JEREMY TRY',
--     1,
--     0,
--     0,
--     0,
--     0,
--     0,
--     0,
--     0,
--     0,
--     0,
--     0,
--     0,
--     0,
--     0,
--     'SIEGE',
--     'SIEGE',
--     'SIEGE'
-- )