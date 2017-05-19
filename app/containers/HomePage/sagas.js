import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as api from 'api';
import {
  LOAD_DATA,
  ADD_ENTRY,
} from './constants';
import {
  loadDataSuccess,
  loadDataFailure,
  addEntrySuccess,
  addEntryFailure,
  closeModal,
} from './actions';

export function* loadDataSaga() {
  try {
    const response = yield call(api.loadData);
    yield put(loadDataSuccess(response));
  } catch (err) {
    yield put(loadDataFailure(err.message));
  }
}

export function* addEntrySaga({ payload }) {
  try {
    const response = yield call(api.addEntry, payload);
    yield put(addEntrySuccess(response));
    yield put(closeModal());
  } catch (err) {
    yield put(addEntryFailure(err.message));
  }
}

export function* watchers() {
  yield takeLatest(LOAD_DATA, loadDataSaga);
  yield takeLatest(ADD_ENTRY, addEntrySaga);
}

// All sagas to be loaded
export default [
  watchers,
];
