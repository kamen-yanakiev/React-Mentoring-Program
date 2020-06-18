import React from 'react';
import MainContentTop from '../components/main/MainContentTop';
import Movies from '../components/movie/Movies';
import PropTypes from 'prop-types';

const MainContent = ({ openMovie }) => {
  const movieToOpen = (name, id) => {
    openMovie(name, id);
  }
  return (
    <div>
      <MainContentTop></MainContentTop>
      <Movies passMovie={movieToOpen}/>
    </div>
  )
}

Movies.propTypes = {
  passMovie: PropTypes.func.isRequired
}

export default MainContent;