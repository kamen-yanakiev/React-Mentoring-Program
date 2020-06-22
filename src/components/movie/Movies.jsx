import React from 'react';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

const movies = [{ name: 'Movie 1', id: '1' }, { name: 'Movie 2', id: '2' }, { name: 'Movie 3', id: '3' }];


const Movies = ({ passMovie }) => {
  const movieToOpen = (name, id) => {
    passMovie(name, id);
  }

  return (
    <div className='main-content-grid'>
      {movies.map(movie => (
        <MovieItem key={movie.id} name={movie.name} id={movie.id} openMovie={movieToOpen} />
      ))}
    </div>
  )
}

Movies.propTypes = {
  openMovie: PropTypes.func.isRequired
}

export default Movies;
