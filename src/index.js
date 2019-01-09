import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import inputs from './store/reducers/input'
import lists from './store/reducers/lists'

const rootReducer = combineReducers({
  inputItem: inputs,
  listItems: lists
})

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    }
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
