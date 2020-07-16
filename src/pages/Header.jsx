import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainHeader from '../components/header/MainHeader';
import SelectedMovieHeader from '../components/header/SelectedMovieHeader';
import { movieSelector, selectedMovieIdSelector } from '../context/movies/selectors';
import { startGetMovieToShow } from '../context/movies/actions';

const Header = () => {
  const movie = useSelector(movieSelector);
  const selectedMovieId = useSelector(selectedMovieIdSelector);
  const dispatch = useDispatch()
  useEffect(() => {
    if (selectedMovieId) {
      startGetMovieToShow(dispatch, selectedMovieId);
    }
  }, [selectedMovieId]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>{movie ? <SelectedMovieHeader movie={movie} /> : <MainHeader />}</div>
  );
};

export default Header;
