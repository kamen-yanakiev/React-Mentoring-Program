import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import EditMovieModal from '../main/EditMovieModal';
import DeleteMovieModal from '../main/DeleteMovieModal';
import { setMovieToShow } from '../../context/movies/actions';

const MovieItem = ({ movie }) => {
    const { Poster } = movie;
    const dispatch = useDispatch();

    const handleMovieClick = () => {
        dispatch(setMovieToShow(movie.id));
    };

    return (
        <div
            className='movie-item'
            style={{
                backgroundImage: `url(${Poster})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <DropdownButton id={`dropdown-item-button-${movie.id}`} className='movie-item-dropdown' aria-label={`dropdown-item-button-${movie.id}`} name={`dropdown-item-button-${movie.id}`} title={<FontAwesomeIcon icon={faEllipsisV} />}>
                <Dropdown.Item as='button'><EditMovieModal movie={movie} /></Dropdown.Item>
                <Dropdown.Item as='button'><DeleteMovieModal imdbID={movie.imdbID} /></Dropdown.Item>
            </DropdownButton>
            <Link to={`/movie/${movie.id}`} className='movie-item-click' onClick={handleMovieClick} />
        </div>
    );
};

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default MovieItem;
