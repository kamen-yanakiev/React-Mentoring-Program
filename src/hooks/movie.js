import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startGetMovies } from '../context/movies/actions';

export const useGetMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    startGetMovies(dispatch)
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
