# Install SQL Server on docker

https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-linux-2017&pivots=cs1-powershell#pullandrun2017

### For load .bak file on Docker File

in this example :

- sql1 is the instance of docker
- ADN_DIAG.bak is our file bak we want to restaure

### create directory for backup

```bash
docker exec -it sql2019 mkdir /var/opt/mssql/backup
```

### Copy the Bakcup File

```bash
docker cp ./ADN_DIAG.BAK sql1:/var/opt/mssql/backup
```

### for see if .bak file is in docker environment

```bash
docker exec -it sql1 ls /var/opt/mssql/backup/
```

👌 normally you will see your bak files

### for apply DATABASE

⚠️ be careful replace "ADN_DIAG" with the name of your desired file

```sql
RESTORE FILELISTONLY FROM DISK= '/var/opt/mssql/backup/ADN_DIAG.BAK'
GO

RESTORE DATABASE ADN_DIAG FROM DISK='/var/opt/mssql/backup/ADN_DIAG.BAK' WITH
MOVE 'ADN_DIAG' to '/var/opt/mssql/data/ADN_DIAG.mdf',
MOVE 'ADN_DIAG_log' to '/var/opt/mssql/data/ADN_DIAG_log.ldf'
GO
```

❤️ You just to refresh your sgbd for see your new database 🔥
