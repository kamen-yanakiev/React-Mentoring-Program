import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SelectedMovieHeader = ({ movieToClose, movie }) => {

  const closeHeader = () => {
    movieToClose();
  }

  return (
    <div className='movie-header'>
      <div className="header-text">
        <span className="netflix-span">netflix</span>roulette
          </div>
      <div className='close-btn' onClick={closeHeader}><FontAwesomeIcon icon={faSearch} /></div>
      <div className='movie-header-content'>
        <div className='movie-poster' style={{
          backgroundImage: "url(" + movie.poster_path + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        </div>
        <div className='movie-details'>
          <div className='movie-title'>{movie.title} <span className='movie-rating'>{movie.vote_average}</span></div>
          <div className='short-description'>{movie.tagline}</div>
          <div className='movie-year-and-duration'>
            <span className='year'>{movie.release_date}</span>
            <span className='duration'>{movie.runtime} min</span>
          </div>
          <div className='movie-description'>{movie.overview}</div>
        </div>
      </div>
    </div>
  )
}


SelectedMovieHeader.propTypes = {
  movieToClose: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
}

export default SelectedMovieHeader;
