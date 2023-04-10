const express = require('express');

module.exports = function (app) {
  app.use(express.static('public'));
  app.use(express.json());



  // app.get('api/v1/movies', (req, res) => {
  //   res.status(200).json(movies);
  // });

  // app.post('api/v1/movies', (req, res) => {
  //   movies.push(req.body);
  //   res.sendStatus(201);
  // });
};
