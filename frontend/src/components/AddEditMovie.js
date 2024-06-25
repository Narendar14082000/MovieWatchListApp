import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addMovie, editMovie } from '../redux/actions/movieActions';
import Sidebar from './Sidebar';
import '../styles/AddEditMovie.css';

const AddEditMovie = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movie = useSelector(state =>
    state.movies.movies.find(movie => movie._id === id)
  );

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setDescription(movie.description);
      setReleaseYear(movie.releaseYear);
      setGenre(movie.genre);
    }
  }, [movie]);

  const handleSubmit = e => {
    e.preventDefault();
    const newMovie = { title, description, releaseYear, genre };
    if (id) {
      dispatch(editMovie(id, newMovie));
    } else {
      dispatch(addMovie(newMovie));
    }
    navigate('/');
  };

  return (
    <div className="main-container">
      <Sidebar />
      <div className="content">
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </label>
          <label>
            Release Year:
            <input
              type="number"
              value={releaseYear}
              onChange={e => setReleaseYear(e.target.value)}
            />
          </label>
          <label>
            Genre:
            <input
              type="text"
              value={genre}
              onChange={e => setGenre(e.target.value)}
            />
          </label>
          <div className="button-group">
            <button type="submit">Save</button>
            <button type="button" onClick={() => navigate('/')}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditMovie;
