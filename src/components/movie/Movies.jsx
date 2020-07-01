import React from 'react';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

const Movies = ({ passMovie, movies }) => {
  const movieOpenHandler = (id) => {
    passMovie(id);
  }

  return (
    <div className='main-content-flex'>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} onOpenMovie={movieOpenHandler} />
      ))}
    </div>
  )
}

Movies.propTypes = {
  passMovie: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
};

export default Movies;
