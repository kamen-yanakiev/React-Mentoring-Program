import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

export default { title: 'MovieItem' };

export const MovieItem = () => {
    let movie = {
        Title: "Star Wars: Episode VIII - The Last Jedi",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
        imdbID: "tt2527336",
        id: "tt2527336",
    }

    const { Poster } = movie;

    return (
        <div
            className='movie-item'
            style={{
                backgroundImage: 'url(' + Poster + ')',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <DropdownButton id={`dropdown-item-button-${movie.id}`} className='movie-item-dropdown' name={`dropdown-item-button-${movie.id}`} title={<FontAwesomeIcon icon={faEllipsisV} />}>
                <Dropdown.Item as="button">Edit Movie</Dropdown.Item>
                <Dropdown.Item as="button">Delete Movie</Dropdown.Item>
            </DropdownButton>
        </div>
    )
};
