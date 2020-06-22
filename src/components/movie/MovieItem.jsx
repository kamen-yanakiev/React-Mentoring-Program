import React from 'react';
import PropTypes from 'prop-types';
import EditMovieModal from '../main/EditMovieModal';
import DeleteMovieModal from '../main/DeleteMovieModal';

const MovieItem = ({ name, id, openMovie }) => {

  // const changeHeader = () => {
  //   openMovie(name, id);
  // }

  return (
    <div className='movie-item'>
      <div>{name}</div>
      <EditMovieModal />
      <DeleteMovieModal />
    </div>
  )
}

MovieItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  openMovie: PropTypes.func.isRequired
}

export default MovieItem;
