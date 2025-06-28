import { all } from 'redux-saga/effects';
import newsSaga from '../sagas/newsSaga';

export default function* rootSaga() {
  yield all([
    newsSaga(),
  ]);
}
