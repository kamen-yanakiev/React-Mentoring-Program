import React from 'react';
import { useSelector } from 'react-redux';
import MainContentTop from '../components/main/MainContentTop';
import Movies from '../components/movie/Movies';

const MainContent = () => {
  const moviesData = useSelector((state) => state.movies.moviesData);

  return (
    <div>
      <MainContentTop />
      <Movies movies={moviesData} />
    </div>
  );
};

export default MainContent;
