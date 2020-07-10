import React from 'react';
import AddMovieModal from './AddMovieModal';

class MainHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      searchPlaceholderText: '',
      textVariants: [
        'What do you want to watch?',
        'Search for your movie here',
        'What would you like to watch?',
        'Find a movie',
      ],
    };
  }

  componentDidMount() {
    let index = Math.floor(Math.random() * 4);
    this.setState({ searchPlaceholderText: this.state.textVariants[index] });
  }

  render() {
    return (
      <div className='header'>
        <div className='header-text'>
          <span className='netflix-span'>netflix</span>roulette
        </div>
        <AddMovieModal />
        <div className='search-and-results'>
          <h2 className='find-movie'>Find your movie</h2>
          <input
            type='text'
            name='searchbar'
            className='search-movie-input'
            placeholder={this.state.searchPlaceholderText}
            id=''
          />
          <button className='movie-search-btn'>Search</button>
        </div>
      </div>
    );
  }
}

export default MainHeader;
