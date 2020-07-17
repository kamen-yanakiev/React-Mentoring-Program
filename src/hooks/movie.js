import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetMovies } from '../context/movies/actions';
import { moviesDataSelector } from '../context/movies/selectors';

export const useGetMovies = () => {
  const dispatch = useDispatch();
  const moviesData = useSelector(moviesDataSelector);
  useEffect(() => {
    startGetMovies(dispatch);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return moviesData;
}
