import React, { useState, useEffect, useCallback } from "react";
import Header from "./Header";
import MainContent from "./MainContent";

const App = () => {
  const [loading, clickHandler] = useState(false);

  const [movieToShow, showMovieData] = useState({});

  const movieToOpen = (movie) => {
    memoizedCallback(movie);
  };

  const useCloseMovie = () => {
    clickHandler(false);
    showMovieData({});
  };

  const memoizedCallback = useCallback((movie) => {
    showMovieData(movie);
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
        passMovieToClose={useCloseMovie}
        movie={movieToShow}
      />
      <p></p>
      <MainContent openMovie={movieToOpen} />
    </div>
  );
};

export default App;
