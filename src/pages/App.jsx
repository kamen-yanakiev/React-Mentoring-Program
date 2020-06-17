import React, { useContext } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import PropTypes from "prop-types";
import MoviesState from "../context/movies/MoviesState";

const App = ({ openMovie }) => {
  // const movie = {};


  // const movieToOpen = (name, id) => {
  //   movie.name = name;
  //   movie.id = id;
  // };

  return (
    <MoviesState>
      <div className="App">
        <Header />
        <MainContent />
      </div>
    </MoviesState>
  );
};

App.propTypes = {
  openMovie: PropTypes.func.isRequired,
};

export default App;
