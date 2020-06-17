import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditMovieModal from '../main/EditMovieModal';
import DeleteMovieModal from '../main/DeleteMovieModal';

const MovieItem = ({ name, id, openMovie }) => {
    let [movie, changeHeader] = useState();

    const openMovieChild = () => {
        changeHeader(name);
    }

    return (
        <div className='movie-item' onClick={openMovieChild}>
            <div>{name}</div>
            <div>{id}</div>
            <EditMovieModal/>
            <DeleteMovieModal/>
        </div>
    )
}

MovieItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    openMovie: PropTypes.func.isRequired
}

export default MovieItem;
