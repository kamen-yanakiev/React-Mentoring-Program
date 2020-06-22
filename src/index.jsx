import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import './scss/app.scss';
import ErrorBoundary from './ErrorBoundary'

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
