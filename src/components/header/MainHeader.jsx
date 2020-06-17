import React, { PureComponent } from "react";
import AddMovieModal from "./AddMovieModal";

class MainHeader extends PureComponent {
  render() {
    return (
      <div className="header">
        <div className="header-text">
          <span className="netflix-span">netflix</span>roulette
        </div>
        <AddMovieModal />
        <div className="search-and-results">
          <h2 className="find-movie">Find your movie</h2>
          <input
            type="text"
            name="searchbar"
            className="search-movie-input"
            placeholder="What do you want to watch?"
            id=""
          />
          <button className="movie-search-btn">
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default MainHeader;
