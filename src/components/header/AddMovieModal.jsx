import React, { useState, useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import MoviesContext from '../../context/movies/moviesContext';

function AddMovieBtn() {
  //Show or hide popup
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Handle addMovie
  const moviesContext = useContext(MoviesContext);
  const { moviesData, addMovie } = moviesContext;
  const [idValue, setId] = useState('');
  const [titleValue, setTitle] = useState('');
  const [releaseDateValue, setReleaseDate] = useState('');
  const [urlValue, setUrl] = useState('');
  const [genreValue, setGenre] = useState('');
  const [plotValue, setPlot] = useState('');
  const [runtimeValue, setRuntime] = useState('');

  const idChange = (event) => setId(event.target.value);
  const titleChange = (event) => setTitle(event.target.value);
  const releaseDateChange = (event) => setReleaseDate(event.target.value);
  const urlChange = (event) => setUrl(event.target.value);
  const genreChange = (event) => setGenre(event.target.value);
  const plotChange = (event) => setPlot(event.target.value);
  const runtimeChange = (event) => setRuntime(event.target.value);

  const handleAddMovie = () => {
    const movieIndex = moviesData.findIndex(movie => movie.imdbID === idValue);
    
    if (idValue.length === 0 || movieIndex !== -1) {
      return;
    }

    let movie = {
      imdbID: idValue,
      Title: titleValue,
      Released: releaseDateValue,
      Poster: urlValue,
      Genre: genreValue,
      Plot: plotValue,
      Runtime: runtimeValue
    };
    addMovie(movie);
    handleClose();
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

            <label htmlFor="movie-name">ID*</label>
            <input type="text" name="movie-title" id="" value={idValue} onChange={idChange} />

            <label htmlFor="movie-name">Title</label>
            <input type="text" name="movie-title" id="" value={titleValue} onChange={titleChange} />

            <label htmlFor="movie-title">Release Date</label>
            <input type="text" name="movie-release-date" id="" value={releaseDateValue} onChange={releaseDateChange} />

            <label htmlFor="release-date">Movie URL</label>
            <input type="text" name="release-date" id="" value={urlValue} onChange={urlChange} />

            <label htmlFor="movie-url">Genre</label>
            <input type="text" name="movie-url" id="" value={genreValue} onChange={genreChange} />

            <label htmlFor="movie-ganre">Overview</label>
            <input type="text" name="movie-ganre" id="" value={plotValue} onChange={plotChange} />

            <label htmlFor="movie-runtime">Runtime</label>
            <input type="text" name="movie-runtime" id="" value={runtimeValue} onChange={runtimeChange} />

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Reset
          </Button>
          <Button variant="primary" onClick={handleAddMovie}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovieBtn;
