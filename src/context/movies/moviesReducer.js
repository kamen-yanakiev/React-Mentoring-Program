import {types} from './actions';
import moviesData from '../../movies.json';
import axios from 'axios';
import sortTypes from '../../constants/sorting';

const defaultState = {
  moviesData,
  movie: null,
  loading: true,
  error: null,
  selectedMovieId: null,
  headerLoading: false
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
    case types.SET_MOVIE_TO_SHOW:
      return {
        ...state,
        selectedMovieId: action.payload
      };
    case types.GET_MOVIE_DETAILS:
      return {
        ...state,
        headerLoading: true
      };
    case types.GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movie: action.payload,
        headerLoading: false
      };
    case types.GET_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        movie: null,
        error: action.payload,
        headerLoading: false
      };
    case types.CLOSE_MOVIE:
      return {
        ...state,
        movie: null,
        selectedMovieId: null
      };
    case types.EDIT_MOVIE:
      return {
        ...state,
        loading: true
      };
    case types.EDIT_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case types.EDIT_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case types.DELETE_MOVIE:
      return {
        ...state,
        loading: true
      };
    case types.DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case types.DELETE_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case types.ADD_MOVIE:
      return {
        ...state,
      };
    case types.ADD_MOVIE_SUCCESS:
      return {
        ...state,
      };
    case types.ADD_MOVIE_FAILURE:
      return {
        ...state,
        error: action.payload
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