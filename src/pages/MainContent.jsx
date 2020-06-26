import React from 'react';
import MainContentTop from '../components/main/MainContentTop';
import Movies from '../components/movie/Movies';
import PropTypes from 'prop-types';
import moviesData from '../movies.json';

const MainContent = ({ openMovie }) => {
  const movieToOpen = (id) => {
    const movie = moviesData.find(item => item.id === id);
    openMovie(movie);
  }
  return (
    <div>
      <MainContentTop />
      <Movies movies={ moviesData } passMovie={movieToOpen}/>
    </div>
  )
}

Movies.propTypes = {
  passMovie: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

export default MainContent;