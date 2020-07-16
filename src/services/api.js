import axios from 'axios';
import config from '../config';

export const getMoviesRequest = () => {
  return axios.get(config.backendUrl);
}