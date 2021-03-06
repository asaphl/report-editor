import { combineReducers } from 'redux';
import blocksReducer from './blocksReducer';
import reportReducer from './reportReducer';
import selectedReducer from './selectedReducer';

const rootReducer = combineReducers({
  report: reportReducer,
  selected: selectedReducer,
  blocks: blocksReducer
});

export default rootReducer;
