import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent'

function App() {
  return (
    <div className="App">
        <Header/>
        <MainContent></MainContent>
        <Sidebar></Sidebar>
    </div>
  );
}

export default App;
