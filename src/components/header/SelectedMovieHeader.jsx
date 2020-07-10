import React from 'react';
import { useDispatch } from 'react-redux';
import { closeMovie } from '../../context/movies/actions';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SelectedMovieHeader = ({ movie }) => {
  const dispatch = useDispatch();

  const handleCloseMovie = () => dispatch(closeMovie());

  return (
    <div className='movie-header'>
      <div className='header-text'>
        <span className='netflix-span'>netflix</span>roulette
      </div>
      <div className='close-btn' onClick={handleCloseMovie}><FontAwesomeIcon icon={faSearch} /></div>
      <div className='movie-header-content'>
        <div
          className='movie-poster'
          style={{
            backgroundImage: 'url(' + movie.Poster + ')',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className='movie-details'>
          <div className='movie-title'>
            {movie.Title}{' '}
            <span className='movie-rating'>{movie.imdbRating}</span>
          </div>
          <div className='movie-year-and-duration'>
            <span className='year'>{movie.Released}</span>
            <span className='duration'>{movie.Runtime}</span>
          </div>
          <div className='movie-description'>{movie.Plot}</div>
        </div>
      </div>
    </div>
  );
};

SelectedMovieHeader.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default SelectedMovieHeader;
