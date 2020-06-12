import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function AddMovieBtn () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='edit-movie-btn'>
      <Button className='add-movie-btn' variant="primary" onClick={handleShow}>
        + Add Movie
      </Button>

      <Modal className="add-movie-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="add-movie">

            <label htmlFor="movie-name">Title</label>
            <input type="text" name="movie-name" id=""/>

            <label htmlFor="movie-name">Release Date</label>
            <input type="text" name="movie-name" id=""/>

            <label htmlFor="movie-name">Movie URL</label>
            <input type="text" name="movie-name" id=""/>

            <label htmlFor="movie-name">Genre</label>
            <input type="text" name="movie-name" id=""/>

            <label htmlFor="movie-name">Overview</label>
            <input type="text" name="movie-name" id=""/>

            <label htmlFor="movie-name">Runtime</label>
            <input type="text" name="movie-name" id=""/>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Reset
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovieBtn;
