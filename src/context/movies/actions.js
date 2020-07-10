export const types = {
  GET_MOVIE: 'GET_MOVIE',
  CLOSE_MOVIE: 'CLOSE_MOVIE',
  EDIT_MOVIE: 'EDIT_MOVIE',
  DELETE_MOVIE: 'DELETE_MOVIE',
  ADD_MOVIE: 'ADD_MOVIE',
  SORT_MOVIES: 'SORT_MOVIES'
}

export const showMovie = (id) => ({ type: types.GET_MOVIE, payload: id });

export const closeMovie = () => ({ type: types.CLOSE_MOVIE });

export const editMovie = (newData) => ({ type: types.EDIT_MOVIE, payload: newData });

export const deleteMovie = (id) => ({ type: types.DELETE_MOVIE, payload: id });

export const addMovie = (movie) => ({ type: types.ADD_MOVIE, payload: movie });

export const sortMoviesBy = (sortType) => ({ type: types.SORT_MOVIES, payload: sortType });
