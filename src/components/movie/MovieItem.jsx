import React from 'react';
import PropTypes from 'prop-types';
import EditMovieModal from '../main/EditMovieModal';
import DeleteMovieModal from '../main/DeleteMovieModal';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const MovieItem = ({ id, background, openMovie }) => {

  const changeHeader = () => {
    openMovie(id);
  }

  return (
    <div className='movie-item'
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>

      <DropdownButton id="dropdown-item-button" className='movie-item-dropdown' title={<FontAwesomeIcon icon={faEllipsisV} />}>
        <Dropdown.Item as="button"><EditMovieModal /></Dropdown.Item>
        <Dropdown.Item as="button"><DeleteMovieModal /></Dropdown.Item>
      </DropdownButton>
      <div className='movie-item-click' onClick={changeHeader}></div>
      
    </div>
  )
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  background: PropTypes.string.isRequired,
  openMovie: PropTypes.func.isRequired
}

export default MovieItem;
