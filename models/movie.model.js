const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: { type: String, required: true },
  year: { type: String, required: true },
  type: { type: String, required: true },
  poster: { type: String, required: true },
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
