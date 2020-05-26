import React from 'react';
import AddMovieBtn from '../components/AddMovieBtn';
import Search from '../components/Search';

function Header () {
  return (
    <div className='header'>
      <div className='header-text'><span className='netflix-span'>netflix</span>roulette</div>
      <AddMovieBtn></AddMovieBtn>
      <Search></Search>
    </div>
  )
}

export default Header;
