import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './pages/App';
import reducer from './context/movies/reducers';
import './scss/app.scss';

const store = createStore(reducer);

// store.dispatch({
//   type: 'SORT_MOVIES',
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
