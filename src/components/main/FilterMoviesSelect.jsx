import React from 'react';
import { useDispatch } from 'react-redux';
import { filterMoviesBy } from '../../context/movies/actions';
import filterTypes from '../../constants/filtering';

const FilterMoviesSelect = () => {
    const dispatch = useDispatch();

    const changeFilterType = (filterType) => {
        dispatch(filterMoviesBy(filterType));
    };

    return (
        <ul className='main-content-list'>
            <li><button type='button' onKeyDown={() => changeFilterType(filterTypes.ALL)} onClick={() => changeFilterType(filterTypes.ALL)}>All</button></li>
            <li><button type='button' onKeyDown={() => changeFilterType(filterTypes.DOCUMENTARY)} onClick={() => changeFilterType(filterTypes.DOCUMENTARY)}>Documentary</button></li>
            <li><button type='button' onKeyDown={() => changeFilterType(filterTypes.COMEDY)} onClick={() => changeFilterType(filterTypes.COMEDY)}>Comedy</button></li>
            <li><button type='button' onKeyDown={() => changeFilterType(filterTypes.HORROR)} onClick={() => changeFilterType(filterTypes.HORROR)}>Horror</button></li>
            <li><button type='button' onKeyDown={() => changeFilterType(filterTypes.CRIME)} onClick={() => changeFilterType(filterTypes.CRIME)}>Crime</button></li>
        </ul>
    );
};

export default FilterMoviesSelect;
