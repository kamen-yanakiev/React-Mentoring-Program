import React from 'react';
import sortTypes from '../../constants/sorting';

export default { title: 'SortMoviesDropdown' };

export const SortMoviesDropdown = () => {

    return (
        <div className="main-content-top">
            <div className='main-content-sort'>
                <label htmlFor='main-content-sort-select' className='main-content-sort-label'>Sort By</label>
                <select name='sort-select' id='main-content-sort-select'>
                    <option value={sortTypes.RELEASE_DATE}>Release Date</option>
                    <option value={sortTypes.RATING}>Rating</option>
                    <option value={sortTypes.ALPHABETICALLY}>Alphabetically</option>
                </select>
            </div>
        </div>
    )
};
