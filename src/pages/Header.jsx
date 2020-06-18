import React, { useEffect } from "react";
import MainHeader from "../components/header/MainHeader";
import PropTypes from 'prop-types';
import MoviesContext from "../context/movies/moviesContext";
import useForceUpdate from 'use-force-update';

const Header = (props) => {
  // const moviesContext = useContext(MoviesContext);

  const forceUpdate = useForceUpdate();

  let movieIsSelected = props.loading;

  const closeHeader = () => {
    props.movieToClose();
    console.log(movieIsSelected);
  }

  // if (movieIsSelected) {
  //   return (
  //     <div>
  //       <div>Show Movie</div>
  //       <div onClick={closeHeader}>Close</div>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <MainHeader />
  //     </div>
  //   )
  // };
  useEffect(() => {
    forceUpdate();
    return () => console.log('unmounting...');
  }, [ forceUpdate]);

  return (
    <div>
      {movieIsSelected ? (
        <div key={props.id}>
          <div>Show Movie</div>
          <div onClick={closeHeader}>Close</div>
        </div>
      ) : (
        <div>
          <MainHeader />
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  movieToClose: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
}

export default Header;
