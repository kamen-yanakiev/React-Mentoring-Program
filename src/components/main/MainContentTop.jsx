import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortMoviesBy } from '../../context/movies/actions';

const MainContentTop = () => {
  const [sortType, setSortType] = useState('release-date');
  const dispatch = useDispatch();

  const changeSortType = (event) => {
    setSortType(event.target.value);

    dispatch(sortMoviesBy(event.target.value));
  };

  return (
    <div className='main-content-top'>
      <ul className='main-content-list'>
        <li>All</li>
        <li>Documentary</li>
        <li>Comedy</li>
        <li>Horror</li>
        <li>Crime</li>
      </ul>
      <div className='main-content-sort-span'>
        <span>Sort By</span>
        <select name='sort-select' onChange={changeSortType} value={sortType}>
          <option value='release-date'>Release Date</option>
          <option value='rating'>Rating</option>
          <option value='alphabetically'>Alphabetically</option>
        </select>
      </div>
    </div>
  );
};

export default MainContentTop;
