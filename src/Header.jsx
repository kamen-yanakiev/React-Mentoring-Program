import React, { Fragment } from 'react';
import Search from './Search';


function Header() {
  return (
    <Fragment>
      <div className='header'>
        <Search placeholderText={'Search Placeholder'}></Search>
      </div>
    </Fragment>
  )
}

export default Header;
