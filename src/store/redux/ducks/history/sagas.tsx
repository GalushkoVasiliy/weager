import {takeEvery, put, all} from 'redux-saga/effects';
import types from './types';
import actions from './actions';

function* historySagaWorker({payload}) {
  try {
    yield put(actions.setHistory(payload));
  } catch (error) {
    console.log(error);
  }
}

export default function* rootAuthSaga() {
  yield all([takeEvery(types.SET_NEW_ITEM, historySagaWorker)]);
}
