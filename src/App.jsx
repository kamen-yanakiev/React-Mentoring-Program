import React from 'react';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import ErrorPage from './pages/ErrorPage';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <Redirect to="/movies" />
          </Route>
          <Route exact path='/movies' component={MovieList}/>
          <Route exact path='/movie/:id' component={MovieDetails}/>
          <Route path='/' component={ErrorPage}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
