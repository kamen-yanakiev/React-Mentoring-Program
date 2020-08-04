import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortMoviesBy } from '../../context/movies/actions';
import sortTypes from '../../constants/sorting';
import { sortBySelector } from '../../context/movies/selectors';

const SortMoviesDropdown = () => {
    const dispatch = useDispatch();
    const sortBy = useSelector(sortBySelector);

    const changeSortType = (event) => {
        dispatch(sortMoviesBy(event.target.value));
    };

    return (
        <div className='main-content-sort'>
            <label htmlFor='main-content-sort-select' className='main-content-sort-label'>Sort By</label>
            <select name='sort-select' id='main-content-sort-select' onChange={changeSortType} value={sortBy}>
                <option value={sortTypes.RELEASE_DATE}>Release Date</option>
                <option value={sortTypes.RATING}>Rating</option>
                <option value={sortTypes.ALPHABETICALLY}>Alphabetically</option>
            </select>
        </div>
    )
}

export default SortMoviesDropdown;