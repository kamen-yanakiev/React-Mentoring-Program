import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';

const Movies = ({ movies }) => (
    <div className='main-content-flex'>
        {movies.map((movie) => (
            <MovieItem key={movie.imdbID} movie={movie} />
        ))}
    </div>
);

Movies.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default Movies;
