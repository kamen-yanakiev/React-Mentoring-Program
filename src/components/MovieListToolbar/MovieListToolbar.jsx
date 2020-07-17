import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortMoviesBy, filterMoviesBy } from '../../context/movies/actions';
import sortTypes from '../../constants/sorting';
import filterTypes from '../../constants/filtering';
import { sortBySelector } from '../../context/movies/selectors';

const MainContentTop = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector(sortBySelector);

  const changeSortType = (event) => {

    dispatch(sortMoviesBy(event.target.value));
  };

  const changeFilterType = (filterType) => {
    dispatch(filterMoviesBy(filterType))
  }

  return (
    <div className='main-content-top'>
      <ul className='main-content-list'>
        <li onClick={() => changeFilterType(filterTypes.ALL)}>All</li>
        <li onClick={() => changeFilterType(filterTypes.DOCUMENTARY)}>Documentary</li>
        <li onClick={() => changeFilterType(filterTypes.COMEDY)}>Comedy</li>
        <li onClick={() => changeFilterType(filterTypes.HORROR)}>Horror</li>
        <li onClick={() => changeFilterType(filterTypes.CRIME)}>Crime</li>
      </ul>
      <div className='main-content-sort-span'>
        <span>Sort By</span>
        <select name='sort-select' onChange={changeSortType} value={sortBy}>
          <option value={sortTypes.RELEASE_DATE}>Release Date</option>
          <option value={sortTypes.RATING}>Rating</option>
          <option value={sortTypes.ALPHABETICALLY}>Alphabetically</option>
        </select>
      </div>
    </div>
  );
};

export default MainContentTop;
