import { combineReducers } from 'redux';
import reportMeta from './reportMeta';
import reportReducer from './reportReducer';
import selectedReducer from './selectedReducer';

const rootReducer = combineReducers({
  report: reportReducer,
  selected: selectedReducer,
  reportMeta: reportMeta
});

export default rootReducer;
