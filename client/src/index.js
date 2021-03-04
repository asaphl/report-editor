import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import axios from 'axios';

ReactDOM.render(
  <Provider store={createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(axios)))}>
    <App />
  </Provider>,
  document.getElementById("root")
);
