import React from 'react';
import MainContentTop from '../components/main/MainContentTop';
import Movies from '../components/movie/Movies';
import PropTypes from 'prop-types';
import ErrorBoudary from '../ErrorBoundary';

const MainContent = ({ openMovie }) => {
  const movieToOpen = (name, id) => {
    openMovie(name, id);
  }
  return (
    <div>
      <MainContentTop></MainContentTop>
      <ErrorBoudary>
        <Movies passMovie={movieToOpen} />
      </ErrorBoudary>
    </div>
  )
}

Movies.propTypes = {
  passMovie: PropTypes.func.isRequired
}

export default MainContent;