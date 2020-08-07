import React from 'react';
import SortMoviesDropdown from './SortMoviesDropdown';
import FilterMoviesSelect from './FilterMoviesSelect';

const MainContentTop = () => (
    <div className='main-content-top'>
        <FilterMoviesSelect />
        <SortMoviesDropdown />
    </div>
);

export default MainContentTop;
