import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import MoviesState from '../context/movies/MoviesState';

const App = () => {
  return (
    <MoviesState>
      <div className="App">
        <Header />
        <MainContent />
      </div>
    </MoviesState>
  );
};

export default App;
