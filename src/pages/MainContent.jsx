import React from 'react';
import { useSelector } from 'react-redux';
import MainContentTop from '../components/main/MainContentTop';
import { useGetMovies } from '../hooks/movie';
import Movies from '../components/movie/Movies';
import Spinner from './Spinner';
import { moviesDataSelector, loadingSelector, errorSelector } from '../context/movies/selectors';

const MainContent = () => {
  const moviesData = useSelector(moviesDataSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);

  useGetMovies();
  if (error) {
    return <div>Error</div>
  }
  return (
    loading 
    ? <Spinner /> 
    : <div>
    <MainContentTop />
    <Movies movies={moviesData} />
  </div>
    
  );
};

export default MainContent;
