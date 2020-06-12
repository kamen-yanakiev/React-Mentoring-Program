import React from 'react';
import AddMovieModal from '../components/AddMovieModal';

function Header () {
  return (
    <div className='header'>
      <div className='header-text'><span className='netflix-span'>netflix</span>roulette</div>
      <AddMovieModal/>
    </div>
  )
}

export default Header;
