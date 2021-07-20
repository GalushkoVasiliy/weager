import {combineReducers} from 'redux';
import initializeReducer from '../ducks/initialize';
import historyReducer from '../ducks/history';

const appReducer = combineReducers({
  initialize: initializeReducer,
  history: historyReducer,
});

export default (state, action) => {
  return appReducer(state, action);
};
