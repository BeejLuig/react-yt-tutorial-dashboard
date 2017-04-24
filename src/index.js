import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import custom modules
import store from './redux/store';
import App from './containers/App';
import './bulma-docs.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
