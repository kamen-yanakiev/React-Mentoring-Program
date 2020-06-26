import React from 'react';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

const Movies = ({ passMovie, movies }) => {
  const movieToOpen = (id) => {
    passMovie(id);
  }

  return (
    <div className='main-content-flex'>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} openMovie={movieToOpen} />
      ))}
    </div>
  )
}

Movies.propTypes = {
  passMovie: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
};

export default Movies;
