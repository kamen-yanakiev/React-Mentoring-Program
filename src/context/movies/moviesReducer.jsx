import {
  GET_MOVIES,
  GET_MOVIE,
  CLOSE_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  ADD_MOVIE,
  SORT_MOVIES,
} from './types';
import moviesData from '../../movies.json';

const defaultState = {
  moviesData,
  movie: null,
  loading: true
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesData: action.payload.data,
        loading: false
      };
    case GET_MOVIE:
      const movie = state.moviesData[findMovieById(action.payload, state.moviesData)]
      return {
        ...state,
        movie
      };
    case CLOSE_MOVIE:
      return {
        ...state,
        movie: null,
      };
    case EDIT_MOVIE:
      return {
        ...state,
        moviesData: editMovieHandler(action.payload, state.moviesData),
      };
    case DELETE_MOVIE:
      return {
        ...state,
        moviesData: deleteMovieHandler(action.payload, state.moviesData),
      };
    case ADD_MOVIE:
      return {
        ...state,
        moviesData: addMovieHandler(action.payload, state.moviesData),
      };
    case SORT_MOVIES:
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
    case 'release-date':
      movieDataCopy.sort((a, b) => {
        return new Date(a.Released) - new Date(b.Released);
      });
      break;
    case 'rating':
      movieDataCopy.sort((a, b) => {
        if (Number(a.imdbRating) > Number(b.imdbRating)) return -1;
        if (Number(a.imdbRating) < Number(b.imdbRating)) return 1;
        return 0;
      });
      break;
    case 'alphabetically':
      movieDataCopy.sort((a, b) => {
        return a.Title.localeCompare(b.Title);
      });
      break;
    default:
      break;
  }
  return movieDataCopy;
}