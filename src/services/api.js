import axios from 'axios';
import config from '../config';

export const getMoviesRequest = () => {
  return axios.get(config.backendUrl);
}

export const setMovieToShowRequest = (id) => {
  return axios.get(`${config.backendUrl}/${id}`);
}

export const editMovieRequest = (newData) => {
  return axios.put(`${config.backendUrl}/${newData.imdbID}`, newData);
}

export const deleteMovieRequest = (id) => {
  return axios.delete(`${config.backendUrl}/${id}`);

}
export const addMovieRequest = (movie) => {
  return axios.post(`${config.backendUrl}`, movie);
}
