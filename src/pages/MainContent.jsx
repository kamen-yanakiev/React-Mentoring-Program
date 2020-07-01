import React from 'react';
import MainContentTop from '../components/main/MainContentTop';
import Movies from '../components/movie/Movies';
import PropTypes from 'prop-types';
import moviesData from '../movies.json';

const MainContent = ({ onOpenMovie }) => {
  const movieOpenHandler = (id) => {
    const movie = moviesData.find(item => item.id === id);
    onOpenMovie(movie);
  }
  return (
    <div>
      <MainContentTop />
      <Movies movies={ moviesData } passMovie={movieOpenHandler}/>
    </div>
  )
}

Movies.propTypes = {
  passMovie: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

export default MainContent;