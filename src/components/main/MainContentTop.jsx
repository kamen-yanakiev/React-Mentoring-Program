import React, { useState, useContext } from 'react';
import MoviesContext from '../../context/movies/moviesContext';

const MainContentTop = () => {
  const moviesContext = useContext(MoviesContext);
  const { sortMoviesBy } = moviesContext;
  const [sortType, setSortType] = useState('release-date');

  const changeSortType = (event) => {
    setSortType(event.target.value);
    sortMoviesBy(event.target.value);
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
