const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case 'FETCH_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case 'EDIT_MOVIE':
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie._id === action.payload._id ? action.payload : movie
        ),
      };
    case 'DELETE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter(movie => movie._id !== action.payload),
      };
    case 'TOGGLE_WATCHED':
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie._id === action.payload
            ? { ...movie, watched: !movie.watched }
            : movie
        ),
      };
    case 'RATE_REVIEW_MOVIE':
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie._id === action.payload._id ? action.payload : movie
        ),
      };
    default:
      return state;
  }
};

export default movieReducer;
