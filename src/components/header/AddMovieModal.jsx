import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import * as actions from '../../context/movies/actions';

function AddMovieBtn() {
    // Show or hide popup
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    // Handle addMovie
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

    // Reset
    const handleReset = () => {
        setTitle('');
        setReleaseDate('');
        setUrl('');
        setGenre('');
        setPlot('');
        setRuntime('');
        handleClose();
    };

    const handleAddMovie = () => {
        const id = Date.now().toString();
        const movie = {
            imdbID: id,
            id,
            key: id,
            Title: titleValue,
            Released: releaseDateValue,
            Poster: urlValue,
            Genre: genreValue,
            Plot: plotValue,
            Runtime: runtimeValue,
        };
        actions.startAddMovie(dispatch, movie);
        handleReset();
    };

    return (
        <div className='edit-movie-btn'>
            <Button className='add-movie-btn' variant='primary' onClick={handleShow}>
                + Add Movie
            </Button>

            <Modal className='add-movie-modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action='add-movie'>
                        <label htmlFor='movie-name'>Title</label>
                        <input
                            type='text'
                            name='movie-title'
                            id='movie-title'
                            value={titleValue}
                            onChange={titleChange}
                        />

                        <label htmlFor='release-date'>Release Date</label>
                        <input
                            type='text'
                            name='movie-release-date'
                            id='movie-release-date'
                            value={releaseDateValue}
                            onChange={releaseDateChange}
                        />

                        <label htmlFor='movie-url'>Movie URL</label>
                        <input
                            type='text'
                            name='movie-url'
                            id='movie-url'
                            value={urlValue}
                            onChange={urlChange}
                        />

                        <label htmlFor='movie-genre'>Genre</label>
                        <input
                            type='text'
                            name='movie-genre'
                            id='movie-genre'
                            value={genreValue}
                            onChange={genreChange}
                        />

                        <label htmlFor='movie-overview'>Overview</label>
                        <input
                            type='text'
                            name='movie-overview'
                            id='movie-overview'
                            value={plotValue}
                            onChange={plotChange}
                        />

                        <label htmlFor='movie-runtime'>Runtime</label>
                        <input
                            type='text'
                            name='movie-runtime'
                            id='movie-runtime'
                            value={runtimeValue}
                            onChange={runtimeChange}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button id='add-reset-btn' variant='secondary' onClick={handleReset}>
                        Reset
                    </Button>
                    <Button id='add-submit-btn' variant='primary' onClick={handleAddMovie}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddMovieBtn;
