import React from 'react';

function MainContentTop() {

  const throwError = () => {
    debugger;
    throw new Error();
  }

  return (
    <div className='main-content-top'>
      <ul className='main-content-list'>
        <li onClick={throwError}>All</li>
        <li>Documentary</li>
        <li>Comedy</li>
        <li>Horror</li>
        <li>Crime</li>
      </ul>
      <div className='main-content-sort-span'>
        <span>Sort By</span>
        <select name="sort-select">
          <option value="release-date">Release Date</option>
          <option value="rating">Rating</option>
          <option value="alphabetically">Alphabetically</option>
        </select>
      </div>
    </div>
  )
}

export default MainContentTop;