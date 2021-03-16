import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import axios from 'axios';
import SERVER_URL from './constants/server';

axios.defaults.baseURL = SERVER_URL;

ReactDOM.render(
  <Provider store={createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(axios)))}>
    <App />
  </Provider>,
  document.getElementById("root")
);
