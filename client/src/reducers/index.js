import { combineReducers } from 'redux';
import reportReducer from './reportReducer';
import selectedReducer from './selectedReducer';

const rootReducer = combineReducers({
  report: reportReducer,
  selected: selectedReducer
});

export default rootReducer;
