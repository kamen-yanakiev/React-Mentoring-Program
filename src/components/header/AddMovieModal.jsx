import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function AddMovieBtn() {
  let title = '';

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }

  const addMovie = () => {
    console.log('--------');
    
    console.log(title);
  }

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
            <input type="text" name="movie-title" id="" value={title} />

            <label htmlFor="movie-title">Release Date</label>
            <input type="text" name="movie-release-date" id="" />

            <label htmlFor="release-date">Movie URL</label>
            <input type="text" name="release-date" id="" />

            <label htmlFor="movie-url">Genre</label>
            <input type="text" name="movie-url" id="" />

            <label htmlFor="movie-ganre">Overview</label>
            <input type="text" name="movie-ganre" id="" />

            <label htmlFor="movie-runtime">Runtime</label>
            <input type="text" name="movie-runtime" id="" />

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Reset
          </Button>
          <Button variant="primary" onClick={addMovie}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovieBtn;
