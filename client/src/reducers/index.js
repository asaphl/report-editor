import { combineReducers } from 'redux';
import datasourcesReducer from './datasourcesReducer';
import pageReducer from './pageReducer';
import selectedReducer from './selectedReducer';

const rootReducer = combineReducers({
  page: pageReducer,
  datasources: datasourcesReducer,
  selected: selectedReducer
});

export default rootReducer;
