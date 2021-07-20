import {put, takeEvery} from 'redux-saga/effects';
import actions from './actions';
import types from './types';

function* setToHistory(action: {payload: {city: string}}) {
  try {
    yield put(actions.setItemToHistory({city: action.payload.city}));
  } catch (e) {
    console.log(e.message);
  }
}

export default function* historySaga() {
  yield takeEvery(types.SET_NEW_ITEM_TO_HISTORY, setToHistory);
}
