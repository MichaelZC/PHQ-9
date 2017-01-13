import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

if (typeof window === 'undefined') {
  global.window = {};
}

const getStore = () => {
  // for redux tools
  const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const store = createStore(
    reducer,
    // we'll replace this with our preloaded state at some point
    {
      responses: [],
      score: 0,
    },
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default getStore;
