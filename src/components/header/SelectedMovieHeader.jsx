import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeMovie, startGetMovieToShow } from '../../context/movies/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { headerLoadingSelector, movieSelector } from '../../context/movies/selectors';
import Spinner from '../../pages/Spinner';
import { Link,useParams } from 'react-router-dom';


const SelectedMovieHeader = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(movieSelector); 
  const headerLoading = useSelector(headerLoadingSelector);

  useEffect(() => {
    if (id) {
      startGetMovieToShow(dispatch, id);
    }
  }, [id]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleCloseMovie = () => dispatch(closeMovie());

  return (
    headerLoading 
    ? <Spinner />
    : <div className='movie-header'>
      <div className='header-text'>
        <span className='netflix-span'>netflix</span>roulette
      </div>
      <Link to={'/'} className='close-btn' onClick={handleCloseMovie}><FontAwesomeIcon icon={faSearch} /></Link>
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

export default SelectedMovieHeader;
