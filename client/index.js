import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const preloadedState = window.initState;// eslint-disable-line no-undef
const store = createStore(preloadedState || {});
const root = document.getElementById('root'); //eslint-disable-line 

render(
  <Provider store={store}>
    <div />
  </Provider>,
  root,
);
