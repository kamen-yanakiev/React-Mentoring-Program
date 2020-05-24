import React from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Search from './Search';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Search></Search>
        <Sidebar></Sidebar>
    </div>
  );
}

export default App;
