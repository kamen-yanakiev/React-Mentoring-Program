import React, { useState, useEffect, useCallback } from "react";
import Header from "./Header";
import MainContent from "./MainContent";

const App = () => {
  const [loading, clickHandler] = useState(false);

  const [movieToShow, showMovieData] = useState({});


  const movieToOpen = (movie) => {
    clickHandler(true);
    // console.log(name);
    // memoizedCallback(name, id);
    showMovieData(movie);
  }

  const closeMovie = () => {
    clickHandler(false);
    showMovieData({});
  }

  // const memoizedCallback = useCallback (
  //   (name, id) => {
  //     console.log(`Inside useCallback -> ${name} --- ${id}`);
  //   },
  //   []
  // );

  // useEffect(() => {
  //   if (movieToShow.name) {
  //     console.log(`Inside useEffect -> ${movieToShow.name}`);
  //   }
  // }, [movieToShow]);

  return (
    <div className="App">
      <Header loading={loading} passMovieToClose={closeMovie} movie={movieToShow} />
      <MainContent openMovie={movieToOpen} />
    </div>
  );
};

export default App;
