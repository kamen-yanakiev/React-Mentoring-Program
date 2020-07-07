import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import MoviesContext from '../../context/movies/moviesContext';

function DeleteMovieModal ({imdbID}) {
  //Show or hide popup
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Handle delete
  const moviesContext = useContext(MoviesContext);
  const { deleteMovie } = moviesContext;

  const handleDelete = () => {
    deleteMovie(imdbID);
    handleClose();
  }

  return (
    <div className='edit-movie-btn'>
      <div className="delete-btn" variant="primary" onClick={handleShow}>
        Delete
      </div>

      <Modal className="delete-movie-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this movie?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )

}

DeleteMovieModal.propTypes = {
  imdbID: PropTypes.string.isRequired
};

export default DeleteMovieModal;