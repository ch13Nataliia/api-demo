const Movie = require('../models/movie.model');

exports.getMovies = async (req, res) => {
  let query = {};
  if (req.params.id) {
    query._id = req.params.id;
  }
  try {
    const movies = await Movie.find(query);
    return res.status(200).json(movies);
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.addMovie = async (req, res) => {
  const movieData = req.body;
  console.log('movieData', movieData);
  try {
    const newMovie = new Movie(movieData);
    const result = await newMovie.save();
    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.updateMovie = async (req, res) => {
  const tutorId = req.params.id;

try {
  const result = await Movie.updateOne({ _id: tutorId }, req.body);
  if (result.n === 0) return res.sendStatus(404);
  res.sendStatus(200);
} catch (err) {
  return res.status(500).send(err);
}};

exports.deleteMovie = async (req, res) => {
  try {
    const result = await Movie.deleteOne({ _id: req.params.id });
    if (result.n === 0) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (err) {
    return res.status(500).send(err);
  }
};
