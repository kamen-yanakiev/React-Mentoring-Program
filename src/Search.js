import React, { PureComponent } from 'react'

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

  render() {
    const searchResults = [];

    for (let i = 0; i < this.state.results.length; i++) {
      if (this.state.results[i].length > 0) {
        searchResults.push(<li>{ this.state.results[i] }</li>);
      }
    }

    return (
      <div className='search-and-results'>
        <input type="text" 
        name="searchbar" 
        placeholder='Search...' 
        onChange={ this.onTextChange } 
        id=""/>
        <button onClick={ this.onTextSave }>Search</button>
        <ul>
          { searchResults }
        </ul>
      </div>
    )
  }
}

export default Search;