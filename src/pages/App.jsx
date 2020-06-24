import React, { useState, useEffect, useCallback } from "react";
import Header from "./Header";
import MainContent from "./MainContent";

const App = () => {
  const [loading, clickHandler] = useState(false);

  const [movieToShow, showMovieData] = useState({});

  const movieToOpen = (movie) => {
    memoizedCallback(movie.title, movie.id);
    showMovieData(movie);
  };

  const closeMovie = () => {
    clickHandler(false);
    showMovieData({});
  };

  const memoizedCallback = useCallback((name, id) => {
    console.log(`Inside useCallback -> ${name} --- ${id}`);
  }, []);

  useEffect(() => {
    if (movieToShow.title) {
      clickHandler(true);
    }
  }, [movieToShow]);

  return (
    <div className="App">
      <Header
        loading={loading}
        passMovieToClose={closeMovie}
        movie={movieToShow}
      />
      <p></p>
      <MainContent openMovie={movieToOpen} />
    </div>
  );
};

export default App;
