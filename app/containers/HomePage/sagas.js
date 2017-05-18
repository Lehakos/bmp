import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as api from 'api';
import {
  LOAD_DATA,
} from './constants';
import {
  loadDataSuccess,
  loadDataFailure,
} from './actions';

export function* loadDataSaga() {
  try {
    const response = yield call(api.loadData);
    yield put(loadDataSuccess(response));
  } catch (err) {
    yield put(loadDataFailure(err.message));
  }
}

export function* watchers() {
  yield takeLatest(LOAD_DATA, loadDataSaga);
}

// All sagas to be loaded
export default [
  watchers,
];
