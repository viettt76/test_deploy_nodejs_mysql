const express = require("express");
const bodyParser = require("body-parser");
const { AppDataSource } = require("./data-source");
const { Routes } = require("./routes");

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach((route) => {
      app[route.method](route.route, (req, res, next) => {
        const result = new route.controller()[route.action](req, res, next);
        if (result instanceof Promise) {
          result.then((result) => {
            if (result !== null && result !== undefined) {
              res.send(result);
            }
          });
        } else if (result !== null && result !== undefined) {
          res.json(result);
        }
      });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(8080);

    app.get("/", (req, res) => {
      res.send("Hello ae");
    });

    console.log(
      "Express server has started on port 8080. Open http://localhost:8080 to see results"
    );
  })
  .catch((error) => console.log(error));
