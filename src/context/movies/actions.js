import { getMoviesRequest, setMovieToShowRequest, editMovieRequest, deleteMovieRequest, addMovieRequest } from '../../services/api';

export const types = {
  GET_MOVIES: 'GET_MOVIES',
  GET_MOVIES_SUCCESS: 'GET_MOVIES_SUCCESS',
  GET_MOVIES_FAILURE: 'GET_MOVIES_FAILURE',
  SET_MOVIE_TO_SHOW: 'SET_MOVIE_TO_SHOW',
  GET_MOVIE_DETAILS: 'GET_MOVIE_DETAILS',
  GET_MOVIE_DETAILS_SUCCESS: 'GET_MOVIE_DETAILS_SUCCESS',
  GET_MOVIE_DETAILS_FAILURE: 'GET_MOVIE_DETAILS_FAILURE',
  CLOSE_MOVIE: 'CLOSE_MOVIE',
  EDIT_MOVIE: 'EDIT_MOVIE',
  EDIT_MOVIE_SUCCESS: 'EDIT_MOVIE_SUCCESS',
  EDIT_MOVIE_FAILURE: 'EDIT_MOVIE_FAILURE',
  DELETE_MOVIE: 'DELETE_MOVIE',
  DELETE_MOVIE_SUCCESS: 'DELETE_MOVIE_SUCCESS',
  DELETE_MOVIE_FAILURE: 'DELETE_MOVIE_FAILURE',
  ADD_MOVIE: 'ADD_MOVIE',
  ADD_MOVIE_SUCCESS: 'ADD_MOVIE_SUCCESS',
  ADD_MOVIE_FAILURE: 'ADD_MOVIE_FAILURE',
  SORT_MOVIES: 'SORT_MOVIES',
  FILTER_MOVIES: 'FILTER_MOVIES'
}

export const getMovies = () => ({ type: types.GET_MOVIES });
export const getMoviesSuccess = (moviesData) => ({ type: types.GET_MOVIES_SUCCESS, payload: moviesData });
export const getMoviesFailure = (error) => ({ type: types.GET_MOVIES_FAILURE, payload: error });

export const setMovieToShow = (id) => ({ type: types.SET_MOVIE_TO_SHOW, payload: id });
export const getMovieDetails = (id) => ({ type: types.GET_MOVIE_DETAILS, payload: id });
export const getMovieDetailsSuccess = (movie) => ({ type: types.GET_MOVIE_DETAILS_SUCCESS, payload: movie });
export const getMovieDetailsFailure = (error) => ({ type: types.GET_MOVIE_DETAILS_FAILURE, payload: error });

export const closeMovie = () => ({ type: types.CLOSE_MOVIE });

export const editMovie = (newData) => ({ type: types.EDIT_MOVIE, payload: newData });
export const editMovieSuccess = (newData) => ({ type: types.EDIT_MOVIE_SUCCESS, payload: newData });
export const editMovieFailure = (newData) => ({ type: types.EDIT_MOVIE_FAILURE, payload: newData });

export const deleteMovie = () => ({ type: types.DELETE_MOVIE });
export const deleteMovieSuccess = (id) => ({ type: types.DELETE_MOVIE_SUCCESS, payload: id });
export const deleteMovieFailure = (id) => ({ type: types.DELETE_MOVIE_FAILURE, payload: id });

export const addMovie = (movie) => ({ type: types.ADD_MOVIE, payload: movie });
export const addMovieSuccess = (movie) => ({ type: types.ADD_MOVIE_SUCCESS, payload: movie });
export const addMovieFailure = (movie) => ({ type: types.ADD_MOVIE_FAILURE, payload: movie });

export const sortMoviesBy = (sortType) => ({ type: types.SORT_MOVIES, payload: sortType });

export const filterMoviesBy = (filterType) => ({ type: types.FILTER_MOVIES, payload: filterType });

//Async handlers
export const startGetMovies = (dispatch) => {
    dispatch(getMovies());
    getMoviesRequest()
    .then((res) =>{
      dispatch(getMoviesSuccess(res.data));
    })
    .catch((error)=> {
      dispatch(getMoviesFailure(error));
    })
}

export const startGetMovieToShow = (dispatch, id) => {
    dispatch(getMovieDetails());
    setMovieToShowRequest(id)
    .then((res) =>{
      dispatch(getMovieDetailsSuccess(res.data));
    })
    .catch((error)=> {
      dispatch(getMovieDetailsFailure(error));
    })
}

export const startEditMovie = (dispatch, newData) => {
    dispatch(deleteMovie());
    editMovieRequest(newData)
    .then((res) =>{
      dispatch(deleteMovieSuccess(res));
      startGetMovies(dispatch);
    })
    .catch((error)=> {
      dispatch(deleteMovieFailure(error));
    })
}

export const startDeleteMovie = (dispatch, id) => {
    dispatch(deleteMovie());
    deleteMovieRequest(id)
    .then((res) =>{
      dispatch(deleteMovieSuccess(res));
      startGetMovies(dispatch);
    })
    .catch((error)=> {
      dispatch(deleteMovieFailure(error));
    })
}

export const startAddMovie = (dispatch, movie) => {
    dispatch(addMovie());
    addMovieRequest(movie)
    .then((res) =>{
      dispatch(addMovieSuccess(res));
      startGetMovies(dispatch);
    })
    .catch((error)=> {
      dispatch(addMovieFailure(error));
    })
}
