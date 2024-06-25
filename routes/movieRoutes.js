const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// GET all movies
router.get('/movies', movieController.getAllMovies);

// POST a new movie
router.post('/movies', movieController.addMovie);

// PUT edit a movie
router.put('/movies/:id', movieController.editMovie);

// DELETE a movie
router.delete('/movies/:id', movieController.deleteMovie);

// PATCH toggle watched/unwatched
router.patch('/movies/:id/watched', movieController.toggleWatched);

// PATCH rate and review a movie
router.patch('/movies/:id/rate-review', movieController.rateReviewMovie);

module.exports = router;
