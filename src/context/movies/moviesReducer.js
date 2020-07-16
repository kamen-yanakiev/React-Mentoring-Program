import {types} from './actions';
import moviesData from '../../movies.json';
import axios from 'axios';
import sortTypes from '../../constants/sorting';

const defaultState = {
  moviesData,
  movie: null,
  loading: true,
  error: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.GET_MOVIES_SUCCESS:
      return {
        ...state,
        moviesData: action.payload,
        loading: false
      };
    case types.GET_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case types.GET_MOVIE:
      const movie = state.moviesData[findMovieById(action.payload, state.moviesData)]
      return {
        ...state,
        movie
      };
    case types.CLOSE_MOVIE:
      return {
        ...state,
        movie: null,
      };
    case types.EDIT_MOVIE:
      return {
        ...state,
        moviesData: editMovieHandler(action.payload, state.moviesData),
      };
    case types.DELETE_MOVIE:
      return {
        ...state,
        moviesData: deleteMovieHandler(action.payload, state.moviesData),
      };
    case types.ADD_MOVIE:
      return {
        ...state,
        moviesData: addMovieHandler(action.payload, state.moviesData),
      };
    case types.SORT_MOVIES:
      return {
        ...state,
        moviesData: sortMoviesHandler(action.payload, state.moviesData),
      };
    default:
      return state;
  }
};

//Finds and returns the index of a movie in moviesData by searching for an ID
function findMovieById(id, stateMoviesData) {
  return stateMoviesData.findIndex((movie) => movie.imdbID === id);
}

//Handles editMovie logic
function editMovieHandler(movie, stateMoviesData) {
  const { imdbID, titleValue, releaseDateValue, urlValue, genreValue, plotValue, runtimeValue } = movie;
  const movieDataCopy = [...stateMoviesData];
  const movieIndex = movieDataCopy.findIndex((movie) => movie.imdbID === imdbID);

  if (titleValue.length > 0) {
    movieDataCopy[movieIndex].Title = titleValue;
  }
  if (releaseDateValue.length > 0) {
    movieDataCopy[movieIndex].Released = releaseDateValue;
  }
  if (urlValue.length > 0) {
    movieDataCopy[movieIndex].Poster = urlValue;
  }
  if (genreValue.length > 0) {
    movieDataCopy[movieIndex].Genre = genreValue;
  }
  if (plotValue.length > 0) {
    movieDataCopy[movieIndex].Plot = plotValue;
  }
  if (runtimeValue.length > 0) {
    movieDataCopy[movieIndex].Runtime = runtimeValue;
  }
  return movieDataCopy;
}

//Handles deleteMovie logic
function deleteMovieHandler(id, stateMoviesData) {
  const movieDataCopy = [...stateMoviesData];
  const movieIndex = findMovieById(id, movieDataCopy);
  movieDataCopy.splice(movieIndex, 1);
  axios.delete(`http://localhost:3000/movies/${id}`);
  return movieDataCopy;
}

//Handles addMovie logic
function addMovieHandler(movie, stateMoviesData) {
  const movieDataCopy = [...stateMoviesData];
  movieDataCopy.push(movie);
  return movieDataCopy;
}

//Handles sortMovies logic
function sortMoviesHandler(sortType, stateMoviesData) {
  const movieDataCopy = [...stateMoviesData];
  switch (sortType) {
    case sortTypes.RELEASE_DATE:
      movieDataCopy.sort((a, b) => {
        return new Date(a.Released) - new Date(b.Released);
      });
      break;
    case sortTypes.RATING:
      movieDataCopy.sort((a, b) => {
        if (Number(a.imdbRating) > Number(b.imdbRating)) return -1;
        if (Number(a.imdbRating) < Number(b.imdbRating)) return 1;
        return 0;
      });
      break;
    case sortTypes.ALPHABETICALLY:
      movieDataCopy.sort((a, b) => {
        return a.Title.localeCompare(b.Title);
      });
      break;
    default:
      break;
  }
  return movieDataCopy;
}