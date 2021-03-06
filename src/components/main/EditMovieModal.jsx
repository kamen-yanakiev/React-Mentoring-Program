import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import { startEditMovie } from '../../context/movies/actions';

function EditMovieModal({ movie }) {
    const {
        imdbID, Title, Released, Poster, Genre, Plot, Runtime,
    } = movie;

    // Handle editing
    const [show, setShow] = useState(false);
    const [titleValue, setTitle] = useState(Title);
    const [releaseDateValue, setReleaseDate] = useState(Released);
    const [urlValue, setUrl] = useState(Poster);
    const [genreValue, setGenre] = useState(Genre);
    const [plotValue, setPlot] = useState(Plot);
    const [runtimeValue, setRuntime] = useState(Runtime);

    const dispatch = useDispatch();

    const titleChange = (event) => setTitle(event.target.value);
    const releaseDateChange = (event) => setReleaseDate(event.target.value);
    const urlChange = (event) => setUrl(event.target.value);
    const genreChange = (event) => setGenre(event.target.value);
    const plotChange = (event) => setPlot(event.target.value);
    const runtimeChange = (event) => setRuntime(event.target.value);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = () => {
        const editedData = {
            ...movie,
            Title: titleValue,
            Released: releaseDateValue,
            Poster: urlValue,
            Genre: genreValue,
            Plot: plotValue,
            Runtime: runtimeValue,
        };
        startEditMovie(dispatch, editedData);
        handleClose();
    };

    return (
        <div className='edit-movie-btn'>
            <div className='edit-btn' role='button' tabIndex={0} variant='primary' onKeyDown={handleShow} onClick={handleShow}>
                Edit
            </div>

            <Modal className='edit-movie-modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action='add-movie'>

                        <label htmlFor='movie-id'>Movie ID</label>
                        <div name='movie-id'>{imdbID}</div>

                        <label htmlFor='movie-title'>Title</label>
                        <input type='text' value={titleValue} onChange={titleChange} name='movie-title' placeholder={Title} />

                        <label htmlFor='release-date'>Release Date</label>
                        <input type='text' value={releaseDateValue} onChange={releaseDateChange} name='release-date' placeholder={Released} />

                        <label htmlFor='movie-url'>Movie URL</label>
                        <input type='text' value={urlValue} onChange={urlChange} name='movie-url' placeholder={Poster} />

                        <label htmlFor='movie-ganre'>Genre</label>
                        <input type='text' value={genreValue} onChange={genreChange} name='movie-ganre' placeholder={Genre} />

                        <label htmlFor='movie-overview'>Overview</label>
                        <input type='text' value={plotValue} onChange={plotChange} name='movie-overview' placeholder={Plot} />

                        <label htmlFor='movie-runtime'>Runtime</label>
                        <input type='text' value={runtimeValue} onChange={runtimeChange} name='movie-runtime' placeholder={Runtime} />

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Reset
                    </Button>
                    <Button variant='primary' onClick={handleEdit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

EditMovieModal.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default EditMovieModal;
