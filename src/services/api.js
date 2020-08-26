import axios from 'axios';
import config from '../config';

export const getMoviesRequest = () => axios.get(config.backendUrl);

export const setMovieToShowRequest = (id) => axios.get(`${config.backendUrl}/${id}`);

export const editMovieRequest = (newData) => axios.put(`${config.backendUrl}/${newData.imdbID}`, newData);

export const deleteMovieRequest = (id) => axios.delete(`${config.backendUrl}/${id}`);
export const addMovieRequest = (movie) => axios.post(`${config.backendUrl}`, movie);
