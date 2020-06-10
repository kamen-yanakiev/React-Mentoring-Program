import React from 'react';
import PropTypes from 'prop-types';


const Search = ({ placeholderText }) => {
  return (
    <input type="text" name="search-movie" placeholder={ placeholderText }/>
  )
}

Search.propTypes = {
  placeholderText: PropTypes.string.isRequired
}

export default Search;
