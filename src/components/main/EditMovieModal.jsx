import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function EditModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='edit-movie-btn'>
      <Button className="edit-btn" variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal className="edit-movie-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="add-movie">

            <label htmlFor="movie-id">Movie ID</label>
            <div name="movie-id">ID Here</div>

            <label htmlFor="movie-title">Title</label>
            <input type="text" name="movie-title" id=""/>

            <label htmlFor="release-date">Release Date</label>
            <input type="text" name="release-date" id="" />

            <label htmlFor="movie-url">Movie URL</label>
            <input type="text" name="movie-url" id="" />

            <label htmlFor="movie-ganre">Genre</label>
            <input type="text" name="movie-ganre" id="" />

            <label htmlFor="movie-overview">Overview</label>
            <input type="text" name="movie-overview" id="" />

            <label htmlFor="movie-runtime">Runtime</label>
            <input type="text" name="movie-runtime" id="" />

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

export default EditModal;