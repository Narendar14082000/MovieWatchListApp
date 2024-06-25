import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { rateReviewMovie } from '../redux/actions/movieActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import Rating from './Rating';
import Sidebar from './Sidebar';
import '../styles/MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = useSelector(state =>
    state.movies.movies.find(movie => movie._id === id)
  );
  const dispatch = useDispatch();

  const [rating, setRating] = useState(movie ? movie.rating : 0);
  const [review, setReview] = useState(movie ? movie.review : '');

  const handleRateReview = () => {
    dispatch(rateReviewMovie(id, rating, review));
    window.confirm("Saved Successfully");
  };

  if (!movie) {
    return <div className="not-found">Movie not found</div>;
  }

  return (
    <div className="main-container">
      <Sidebar />
      <div className="content">
        <div className="details-container">
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>Release Year: {movie.releaseYear}</p>
          <p>Genre: {movie.genre}</p>
          <p>Watched: {movie.watched ? 'Yes' : 'No'}</p>
          <div className="rating-container">
            <Rating className="stars" rating={rating} setRating={setRating} />
          </div>
          <textarea
            value={review}
            onChange={e => setReview(e.target.value)}
            placeholder="Write a review"
          />
          
          <div className="link-group">
          <button onClick={handleRateReview} className="icon-button"><FontAwesomeIcon icon={faSave} /><span>Save</span></button>
            <Link to={`/edit/${movie._id}`} className="icon-button">
              <FontAwesomeIcon icon={faEdit} />
              <span>Edit</span>
            </Link>
            <Link to="/" className="icon-button">
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Back to List</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
