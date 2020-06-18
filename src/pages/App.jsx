import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import MoviesState from "../context/movies/MoviesState";
import useForceUpdate from 'use-force-update';

const App = () => {
  // const movie = {};
  const [loading, clickHandler] = useState(false);

  const forceUpdate = useForceUpdate();

  let movieToShow = {};

  const movieToOpen = (name, id) => {
    clickHandler({ loading: true });
    movieToShow = { name, id };
    console.log(name);
  }

  const closeMovie = () => {
    clickHandler({ loading: false });
    forceUpdate();
  }

  useEffect(() => {
    console.log('render!', loading);
    return () => console.log('unmounting...', loading);
  }, [loading]);

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
