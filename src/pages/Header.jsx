import React from 'react';
import { useSelector } from 'react-redux';
import MainHeader from '../components/header/MainHeader';
import SelectedMovieHeader from '../components/header/SelectedMovieHeader';

const Header = () => {
  const movie = useSelector((state) => state.movies.movie);

  return (
    <div>{movie ? <SelectedMovieHeader movie={movie} /> : <MainHeader />}</div>
  );
};

export default Header;
