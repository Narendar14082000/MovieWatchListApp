// controllers/movieController.js
const Movie = require('../models/Movie');

// Get all movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new movie
const addMovie = async (req, res) => {
  const { title, description, releaseYear, genre } = req.body;
  const newMovie = new Movie({
    title,
    description,
    releaseYear,
    genre,
  });
  try {
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Edit a movie
const editMovie = async (req, res) => {
  const { id } = req.params;
  const { title, description, releaseYear, genre, watched, rating, review } = req.body;
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { title, description, releaseYear, genre, watched, rating, review },
      { new: true }
    );
    if (!updatedMovie) return res.status(404).json({ message: 'Movie not found' });
    res.json(updatedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a movie
const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) return res.status(404).json({ message: 'Movie not found' });
    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mark movie as watched/unwatched
const toggleWatched = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    movie.watched = !movie.watched;
    await movie.save();
    res.json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Rate and review a movie
const rateReviewMovie = async (req, res) => {
  const { id } = req.params;
  const { rating, review } = req.body;
  try {
    const movie = await Movie.findById(id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    movie.rating = rating;
    movie.review = review;
    await movie.save();
    res.json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllMovies,
  addMovie,
  editMovie,
  deleteMovie,
  toggleWatched,
  rateReviewMovie,
};
