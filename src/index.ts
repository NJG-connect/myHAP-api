import express from "express";

import routes from "./routes";
import cors from "cors";

//  Take Env Variable with good environnement
const isDev = process.env.NODE_ENV;
if (isDev === "development" || isDev === "local") {
  require("dotenv").config({
    path: __dirname + `/../.${process.env.NODE_ENV}.env`,
  });
}

// cause in PKG we generate outside the .env
if (isDev === undefined) {
  require("dotenv").config({
    path: process.cwd() + `/.prod.env`,
  });
}

//Connects to the Database -> then starts the express
const port = process.env.PORT || 3000;

(async () => {
  const app = express();
  console.log(process.cwd());

  try {
    app.use(cors());
    app.use(express.json());

    app.use("/", routes);

    app.listen(port, () => {
      console.log(`Server started on port ${port}!`);
    });
  } catch (error) {
    console.log("Error: ", error);
  }
})();
