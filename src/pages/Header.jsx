import React, { useState, useContext, useCallback } from "react";
import MainHeader from "../components/header/MainHeader";
import PropTypes from 'prop-types';
import MoviesContext from "../context/movies/moviesContext";


const Header = () => {
  const moviesContext = useContext(MoviesContext);

  const { loading } = moviesContext;


  // if (movie) {
  //   console.log(movie);
    
  // }

  return (
    <div>
      {!loading ? (
        <div>Show Movie</div>
      ) : (
        <div>
          <MainHeader />
        </div>
      )}
      {/* <button onClick={() => switchHeader(!showMovie)}>Click</button> */}
    </div>
  );
};

Header.propTypes = {
  movie: PropTypes.object.isRequired
}

export default Header;
