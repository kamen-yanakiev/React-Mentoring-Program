import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

function EditMovieModal({movie}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id, title, release_date, poster_path, genres, overview, runtime } = movie;

  return (
    <div className='edit-movie-btn'>
      <div className="edit-btn" variant="primary" onClick={handleShow}>
        Edit
      </div>

      <Modal className="edit-movie-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="add-movie">

            <label htmlFor="movie-id">Movie ID</label>
            <div name="movie-id">{id}</div>

            <label htmlFor="movie-title">Title</label>
            <input type="text" name="movie-title" id="" placeholder={title}/>

            <label htmlFor="release-date">Release Date</label>
            <input type="text" name="release-date" id="" placeholder={release_date}/>

            <label htmlFor="movie-url">Movie URL</label>
            <input type="text" name="movie-url" id="" placeholder={poster_path}/>

            <label htmlFor="movie-ganre">Genre</label>
            <input type="text" name="movie-ganre" id="" placeholder={genres.join(', ')}/>

            <label htmlFor="movie-overview">Overview</label>
            <input type="text" name="movie-overview" id="" placeholder={overview}/>

            <label htmlFor="movie-runtime">Runtime</label>
            <input type="text" name="movie-runtime" id="" placeholder={runtime}/>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Reset
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )

}

EditMovieModal.propTypes = {
  movie: PropTypes.object.isRequired,
};


export default EditMovieModal;