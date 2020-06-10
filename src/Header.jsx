import React, { Fragment } from 'react';
import Search from './Search';
import ErrorBoundary from './ErrorBoundary'

function Header () {
  return (
    <ErrorBoundary>
      <Fragment>
        <div className='header'>
          <Search placeholderText={'Search Placeholder'}></Search>
        </div>
      </Fragment>
    </ErrorBoundary>
  )
}

export default Header;
