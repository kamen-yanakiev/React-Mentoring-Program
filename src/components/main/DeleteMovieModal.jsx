import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function EditModal () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='edit-movie-btn'>
      <Button className="delete-btn" variant="primary" onClick={handleShow}>
        Delete
      </Button>

      <Modal className="delete-movie-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this movie?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )

}

export default EditModal;