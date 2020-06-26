import React from "react";
import MainHeader from "../components/header/MainHeader";
import PropTypes from 'prop-types';
import SelectedMovieHeader from '../components/header/SelectedMovieHeader';

const Header = ({ loading, passMovieToClose, movie }) => {
  let isMovieSelected = loading;

  return (
    <div>
      {isMovieSelected ? (
        <SelectedMovieHeader movieToClose={passMovieToClose} movie={movie}/>
      ) : (
        <MainHeader />
      )}
    </div>
  );
};

Header.propTypes = {
  passMovieToClose: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
};

export default Header;
