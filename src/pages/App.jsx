import React, { useState, useEffect, useCallback } from "react";
import Header from "./Header";
import MainContent from "./MainContent";

const App = () => {

  const useDefaultState = () => {
    const [loading, setLoading] = useState(false);
    const [movieToShow, setMovieData] = useState({});
  
    return { loading, setLoading, movieToShow, setMovieData}
  }

  const {loading, setLoading, movieToShow, setMovieData } = useDefaultState();

  const movieToOpen = (movie) => {
    memoizedCallback(movie);
  };

  const useCloseMovie = () => {
    setLoading(false);
    setMovieData({});
  };

  const memoizedCallback = useCallback((movie) => {
    setMovieData(movie);
  }, [setMovieData]);

  useEffect(() => {
    if (movieToShow.title) {
      setLoading(true);
    }
  }, [movieToShow, setLoading]);

  return (
    <div className="App">
      <Header
        loading={loading}
        passMovieToClose={useCloseMovie}
        movie={movieToShow}
      />
      <MainContent openMovie={movieToOpen} />
    </div>
  );
};

export default App;
