const path = require('path');
const express = require('express');
const router = express.Router();
const {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/movie.controller');

router
  .get('/:id?', getMovies)
  .post('/', addMovie)
  .put(':id', updateMovie)
  .delete('/:id', deleteMovie);

module.exports = router;
