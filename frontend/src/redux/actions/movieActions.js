import axios from 'axios';

export const fetchMovies = () => async dispatch => {
  dispatch({ type: 'FETCH_MOVIES_REQUEST' });
  try {
    const response = await axios.get(`${window.location.origin}/api/movies`);
    dispatch({ type: 'FETCH_MOVIES_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_MOVIES_FAILURE', payload: error.message });
  }
};

export const addMovie = movie => async dispatch => {
  try {
    const response = await axios.post(`${window.location.origin}/api/movies`, movie);
    dispatch({ type: 'ADD_MOVIE', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const editMovie = (id, movie) => async dispatch => {
  try {
    const response = await axios.put(`${window.location.origin}/api/movies/${id}`, movie);
    dispatch({ type: 'EDIT_MOVIE', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const deleteMovie = id => async dispatch => {
  try {
    await axios.delete(`${window.location.origin}/api/movies/${id}`);
    dispatch({ type: 'DELETE_MOVIE', payload: id });
  } catch (error) {
    console.error(error);
  }
};

export const toggleWatched = id => async dispatch => {
  try {
    await axios.patch(`${window.location.origin}/api/movies/${id}/watched`);
    dispatch({ type: 'TOGGLE_WATCHED', payload: id });
  } catch (error) {
    console.error(error);
  }
};

export const rateReviewMovie = (id, rating, review) => async dispatch => {
  try {
    const response = await axios.patch(`${window.location.origin}/api/movies/${id}/rate-review`, {
      rating,
      review,
    });
    dispatch({ type: 'RATE_REVIEW_MOVIE', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
