import React from 'react';
import AddMovieModal from './AddMovieModal';

class MainHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            searchPlaceholderText: 'Search for your movie here',
        };
    }

    render() {
        return (
            <div className='header'>
                <div className='header-text'>
                    <span className='netflix-span'>netflix</span>
                    roulette
                </div>
                <AddMovieModal />
                <div className='search-and-results'>
                    <label htmlFor='main-header-search' className='find-movie'>Find your movie</label>
                    <input
                        type='text'
                        name='searchbar'
                        className='search-movie-input'
                        // eslint-disable-next-line react/destructuring-assignment
                        placeholder={this.state.searchPlaceholderText}
                        id='main-header-search'
                    />
                    <button type='button' className='movie-search-btn'>Search</button>
                </div>
            </div>
        );
    }
}

export default MainHeader;
