import React from "react";
import MainHeader from "../components/header/MainHeader";
import PropTypes from 'prop-types';

const Header = ({ loading, movieToClose, movie }) => {
  let isMovieSelected = loading;

  const closeHeader = () => {
    movieToClose();
  }

  // useEffect(() => {
  //   console.log(props.movie);

  // }, [props.movie]);

  return (
    <div>
      {isMovieSelected ? (
        <div className='movie-header'>
          <div className="header-text">
            <span className="netflix-span">netflix</span>roulette
          </div>
          <div className='close-btn' onClick={ closeHeader }>Close</div>
          <div className='movie-header-content'>
            <div className='movie-poster'>Movie { movie.id } Poster Here</div>
            <div className='movie-details'>
              <div className='movie-title'>{ movie.name }</div>
              <div className='short-description'>This is a description</div>
              <div className='movie-year-and-duration'>
                <span className='year'>2020</span>
                <span className='duration'>147 min</span>
              </div>
              <div className='movie-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sint harum veritatis doloribus perspiciatis ipsa consequatur quibusdam molestiae modi, tempore
                a tenetur iure rem ea ipsam rerum optio! Delectus, laudantium atque!
              </div>
            </div>
          </div>
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
  movie: PropTypes.object.isRequired,
}

export default Header;
