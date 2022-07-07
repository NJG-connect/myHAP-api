<p align="center">
    <img alt="icon-fmdc" src="./logoAndBrand.png" >
</p>

<br />

<h1 align="center">FMDC-API</h1>

## Présentation Projet

Ceci est l'API de FMDC Diagnotics, c'est un executable\_ qui permet d'interfacer avec la BDD de FMDC & Analysimo,
visualiser les dossiers | Interventions & prélèvements.

## Exécution

Ce projet est créer en Node.Js & Express pour l'installer / le lancer merci de suivre les étapes suivantes :

**Créer & Editer le .env**

Vous avez le choix entre .env ou .development.env
selon votre environnement

à la racine créer et ajouter les clés suivantes :

|          Key          |                                                     Description                                                     |
| :-------------------: | :-----------------------------------------------------------------------------------------------------------------: |
|      JWT_SECRET       |                                                     clé secret                                                      |
|         PORT          |                                        le port ou sera disponible votre API                                         |
|  DATABASE_URL_ADN_RG  |                                                   info BDD ADN_RG                                                   |
| DATABASE_URL_ADN_DIAG |                                                  info BDD ADN_DIAG                                                  |
| DATABASE_URL_ADN_FMDC |                                    info BDD ADN_FMDC ( doit-être créer en amont)                                    |
|      OUTPUT_PATH      | Si vous souhaitez set un path pour stocker vos fichiers à un endroit précis ( par défaut c'est récupéré de la BDD ) |

### Commande à savoir

<kbd>npm i</kbd> or <kbd> yarn install</kbd> - Install Dependencies

<kbd> yarn start</kbd> - Run the App

En savoir plus sur :

- Express.js : [For Develop this Project](https://expressjs.com/fr/)
- Node.js : [For Develop this Project](https://nodejs.org/fr/)

ENJOY 🙂

<br />

Merci à vous 🤗
