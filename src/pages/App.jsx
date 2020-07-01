import React, { useState, useEffect, useCallback } from "react";
import Header from "./Header";
import MainContent from "./MainContent";

const App = () => {

  const useDefaultState = () => {
    const [loading, setLoading] = useState(false);
    const [movieToShow, setMovieData] = useState(null);
  
    return { loading, setLoading, movieToShow, setMovieData }
  }

  const { loading, setLoading, movieToShow, setMovieData } = useDefaultState();

  const movieOpenHandler = (movie) => {
    memoizedCallback(movie);
  };

  const useCloseMovie = () => {
    setLoading(false);
    setMovieData(null);
  };

  const memoizedCallback = useCallback((movie) => {
    setMovieData(movie);
  }, [setMovieData]);

  useEffect(() => {
    if (movieToShow) {
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
      <MainContent onOpenMovie={movieOpenHandler} />
    </div>
  );
};

export default App;
