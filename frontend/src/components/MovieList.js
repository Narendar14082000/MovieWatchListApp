import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faCheck, faSearch, faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import { fetchMovies, deleteMovie, toggleWatched } from '../redux/actions/movieActions';
import Sidebar from './Sidebar';
import '../styles/MovieList.css';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    watched: false,
    unwatched: false,
    genres: '',
    releaseYear: ''
  });

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      dispatch(deleteMovie(id));
    }
  };

  const handleToggleWatched = id => {
    dispatch(toggleWatched(id));
  };

  const filteredMovies = movies.filter(movie => {
    const matchesSearchTerm = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesWatched = !filters.watched || movie.watched;
    const matchesUnwatched = !filters.unwatched || !movie.watched;
    const matchesGenres = !filters.genres || movie.genre.toLowerCase().includes(filters.genres.toLowerCase());
    const matchesReleaseYear = !filters.releaseYear || movie.releaseYear.toString() === filters.releaseYear;
    return matchesSearchTerm && matchesWatched && matchesUnwatched && matchesGenres && matchesReleaseYear;
  });

  const applyFilters = newFilters => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <div className="main-container">
      <Sidebar applyFilters={applyFilters} />
      <div className="content">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <div className="welcome-box">
          <h1>Welcome to Movie Watchlists Application</h1>
          <h2>Instructions:</h2>
          <p><FontAwesomeIcon icon={faCheck} /> Click on the movie Card to see the details of the movie and also give rating and comment</p>
          <p><FontAwesomeIcon icon={faCheckSquare} /> Click on this icon to make the movie as watched</p>
          <p><FontAwesomeIcon icon={faSquare} /> Click on this icon to make the movie as Unwatched</p>
          <p><FontAwesomeIcon icon={faEdit} /> Click the edit icon to edit the movie details.</p>
          <p><FontAwesomeIcon icon={faTrash} /> Click the delete icon to remove the movie from your list.</p>
        </div>
        <div className="movie-list">
          {filteredMovies.map(movie => (
            <div key={movie._id} className="movie-card">
              <Link to={`/details/${movie._id}`} className="movie-link">
                <h2>{movie.title}</h2>
                <p>Genre : {movie.genre}</p>
                <p>Release Year : {movie.releaseYear}</p>
                <p>Rating : {movie.rating} / 5</p>
              </Link>
              <div className="button-group">
                <FontAwesomeIcon
                  icon={movie.watched ? faCheckSquare : faSquare}
                  onClick={() => handleToggleWatched(movie._id)}
                  className="icon-button"
                />
                <Link to={`/edit/${movie._id}`} className="edit-button icon-button">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleDelete(movie._id)}
                  className="icon-button"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
