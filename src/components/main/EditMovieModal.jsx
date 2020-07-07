import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import MoviesContext from '../../context/movies/moviesContext';

function EditMovieModal({movie}) {
  //Show or hide popup
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { imdbID, Title, Released, Poster, Genre, Plot, Runtime } = movie;

  //Handle editing
  const moviesContext = useContext(MoviesContext);
  const { editMovie } = moviesContext;
  const [titleValue, setTitle] = useState('');
  const [releaseDateValue, setReleaseDate] = useState('');
  const [urlValue, setUrl] = useState('');
  const [genreValue, setGenre] = useState('');
  const [plotValue, setPlot] = useState('');
  const [runtimeValue, setRuntime] = useState('');

  const titleChange = (event) => setTitle(event.target.value);
  const releaseDateChange = (event) => setReleaseDate(event.target.value);
  const urlChange = (event) => setUrl(event.target.value);
  const genreChange = (event) => setGenre(event.target.value);
  const plotChange = (event) => setPlot(event.target.value);
  const runtimeChange = (event) => setRuntime(event.target.value);
  
  const handleEdit = () => {
    editMovie(movie, imdbID, titleValue, releaseDateValue, urlValue, genreValue, plotValue, runtimeValue);
    handleClose();
  }

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
            <div name="movie-id">{imdbID}</div>

            <label htmlFor="movie-title">Title</label>
            <input type="text" value={titleValue} onChange={titleChange} name="movie-title" id="" placeholder={Title}/>

            <label htmlFor="release-date">Release Date</label>
            <input type="text" value={releaseDateValue} onChange={releaseDateChange} name="release-date" id="" placeholder={Released}/>

            <label htmlFor="movie-url">Movie URL</label>
            <input type="text" value={urlValue} onChange={urlChange} name="movie-url" id="" placeholder={Poster}/>

            <label htmlFor="movie-ganre">Genre</label>
            <input type="text" value={genreValue} onChange={genreChange} name="movie-ganre" id="" placeholder={Genre}/>

            <label htmlFor="movie-overview">Overview</label>
            <input type="text" value={plotValue} onChange={plotChange} name="movie-overview" id="" placeholder={Plot}/>

            <label htmlFor="movie-runtime">Runtime</label>
            <input type="text" value={runtimeValue} onChange={runtimeChange} name="movie-runtime" id="" placeholder={Runtime}/>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Reset
          </Button>
          <Button variant="primary" onClick={handleEdit}>
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