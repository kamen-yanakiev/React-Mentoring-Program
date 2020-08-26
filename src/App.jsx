import React from 'react';
import {
    BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import MainContentHolder from './pages/MainContentHolder';
import SelectedMovieHeader from './components/header/SelectedMovieHeader';
import ErrorPage from './pages/ErrorPage';

const App = () => (
    <Router>
        <div className='App'>
            <Switch>
                <Route exact path='/'>
                    <Redirect to='/movies' />
                </Route>
                <Route exact path='/movies' component={MainContentHolder} />
                <Route exact path='/movie/:id' component={SelectedMovieHeader} />
                <Route path='/' component={ErrorPage} />
            </Switch>
        </div>
    </Router>
);

export default App;
