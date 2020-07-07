import React from 'react';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

const Movies = ({ movies }) => {
  return (
    <div className='main-content-flex'>
      {movies.map(movie => (
        <MovieItem key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movies;
