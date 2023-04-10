const path = require("path");

module.exports = function(app) {
  const API_ENPOINT = "/api";
  const API_VERSION = "v1";

  app.use(`${API_ENPOINT}/${API_VERSION}/movies`, require("./movies.routes"));

  app.all("*", (req, res) => {
    res.sendStatus(404);
  });
};