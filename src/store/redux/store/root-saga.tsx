import {fork, all} from 'redux-saga/effects';
import {historySaga} from '../ducks/history';

export default function* rootSaga(dispatch) {
  yield all([fork(historySaga, dispatch)]);
}
