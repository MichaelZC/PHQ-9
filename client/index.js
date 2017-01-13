import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '../core/app';
import getStore from '../core/store/getStore';

const preloadedState = window.initState;// eslint-disable-line no-undef
const store = getStore(preloadedState);
const root = document.getElementById('root'); //eslint-disable-line 

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
);
