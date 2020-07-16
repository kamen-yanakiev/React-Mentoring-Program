import { getMoviesRequest } from '../../services/api';

export const types = {
  GET_MOVIES: 'GET_MOVIES',
  GET_MOVIES_SUCCESS: 'GET_MOVIES_SUCCESS',
  GET_MOVIES_FAILURE: 'GET_MOVIES_FAILURE',
  GET_MOVIE: 'GET_MOVIE',
  CLOSE_MOVIE: 'CLOSE_MOVIE',
  EDIT_MOVIE: 'EDIT_MOVIE',
  DELETE_MOVIE: 'DELETE_MOVIE',
  ADD_MOVIE: 'ADD_MOVIE',
  SORT_MOVIES: 'SORT_MOVIES'
}

export const getMovies = () => ({ type: types.GET_MOVIES });
export const getMoviesSuccess = (moviesData) => ({ type: types.GET_MOVIES_SUCCESS, payload: moviesData });
export const getMoviesFailure = (error) => ({ type: types.GET_MOVIES_FAILURE, payload: error });

export const showMovie = (id) => ({ type: types.GET_MOVIE, payload: id });

export const closeMovie = () => ({ type: types.CLOSE_MOVIE });

export const editMovie = (newData) => ({ type: types.EDIT_MOVIE, payload: newData });

export const deleteMovie = (id) => ({ type: types.DELETE_MOVIE, payload: id });

export const addMovie = (movie) => ({ type: types.ADD_MOVIE, payload: movie });

export const sortMoviesBy = (sortType) => ({ type: types.SORT_MOVIES, payload: sortType });

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
