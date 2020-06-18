import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import MoviesState from "../context/movies/MoviesState";

const App = () => {
  const [loading, clickHandler] = useState(false);

  const [movieToShow, showMovieData] = useState({});


  const movieToOpen = (name, id) => {
    clickHandler(true);
    console.log(name);
    
    showMovieData({name, id});
  }

  const closeMovie = () => {
    clickHandler(false);
    showMovieData({});
  }

  useEffect(() => {
    console.log(movieToShow);
  }, [movieToShow]);

  return (
    <MoviesState>
      <div className="App">
        <Header loading={loading} movieToClose={closeMovie} movie={movieToShow} />
        <MainContent openMovie={movieToOpen} />
      </div>
    </MoviesState>
  );
};

export default App;
