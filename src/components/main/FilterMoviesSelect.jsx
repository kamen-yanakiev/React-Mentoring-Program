import React from 'react';
import { useDispatch } from 'react-redux';
import { filterMoviesBy } from '../../context/movies/actions';
import filterTypes from '../../constants/filtering';

const FilterMoviesSelect = () => {
    const dispatch = useDispatch();

    const changeFilterType = (filterType) => {
        dispatch(filterMoviesBy(filterType))
    }

    return (
        <ul className='main-content-list'>
            <li onClick={() => changeFilterType(filterTypes.ALL)}>All</li>
            <li onClick={() => changeFilterType(filterTypes.DOCUMENTARY)}>Documentary</li>
            <li onClick={() => changeFilterType(filterTypes.COMEDY)}>Comedy</li>
            <li onClick={() => changeFilterType(filterTypes.HORROR)}>Horror</li>
            <li onClick={() => changeFilterType(filterTypes.CRIME)}>Crime</li>
        </ul>
    )
}

export default FilterMoviesSelect;
