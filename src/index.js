require('../node_modules/basscss/css/basscss.min.css');
require('./styles/main.css');

import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter />
  </Provider>,
  document.getElementById('app')
);

if (process.env.NODE_ENV !== 'production') {
  require('./createDevToolsWindow')(store);
}
