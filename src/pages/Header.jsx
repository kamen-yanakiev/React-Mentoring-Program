import React, {useContext} from 'react';
import MainHeader from '../components/header/MainHeader';
import SelectedMovieHeader from '../components/header/SelectedMovieHeader';
import MoviesContext from '../context/movies/moviesContext';

const Header = () => {
  const moviesContext = useContext(MoviesContext);
  const { movie } = moviesContext;

  return (
    <div>
      {movie ? (
        <SelectedMovieHeader movie={movie}/>
      ) : (
        <MainHeader />
      )}
    </div>
  );
};

export default Header;
