import React, { useContext } from 'react';
import MainContentTop from '../components/main/MainContentTop';
import Movies from '../components/movie/Movies';
import MoviesContext from '../context/movies/moviesContext';

const MainContent = () => {
  const moviesContext = useContext(MoviesContext);
  const { moviesData } = moviesContext;
  
  return (
    <div>
      <MainContentTop />
      <Movies movies={ moviesData } />
    </div>
  )
}

export default MainContent;