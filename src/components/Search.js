import React, { PureComponent } from 'react';
import FindMovie from './FindMovie';

class Search extends PureComponent {
  state = { results: [], searchText: '' };

  saveSearch = (event) => {
    event.preventDefault();
    const text = event.target.value;
    this.setState({ searchText: text });
  }

  onTextChange = (event) => this.saveSearch(event);

  onTextSave = () => this.saveText();

  saveText = () => {
    this.setState({ results: [ ...this.state.results, this.state.searchText ]})
  }

  clearSearchResults = () => {
    this.setState({ results: [] })
  }

  render() {
    const searchResults = [];

    for (let i = 0; i < this.state.results.length; i++) {
      if (this.state.results[i].length > 0) {
        searchResults.push(<li>{ this.state.results[i] }</li>);
      }
    }

    return (
      <div className='search-and-results'>
        <FindMovie></FindMovie>
        <input type="text" 
        name="searchbar"
        className="search-movie-input"
        placeholder="What do you want to watch?" 
        onChange={ this.onTextChange } 
        id=""/>
        <button className="movie-search-btn" onClick={ this.onTextSave }>Search</button>
        <button className="movie-clear-search-btn" onClick={ this.clearSearchResults }>Clear Search</button>
        <div>Search results will display below:</div>
        <ul>
          { searchResults }
        </ul>
      </div>
    )
  }
}

export default Search;
