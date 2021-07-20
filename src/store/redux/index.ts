import {all} from 'redux-saga/effects';
import {combineReducers} from 'redux';

import State from './entities';
import {saga as historySaga} from './combine';
import {reducer as historyReducer} from './combine';

export const appReducer = combineReducers<State>({
  cities: historyReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export function* rootSaga() {
  yield all([historySaga()]);
}
