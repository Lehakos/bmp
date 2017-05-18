/*
 *
 * HomePage actions
 *
 */

import {
  LOAD_DATA,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
  CHANGE_FILTER,
  SEARCH,
} from './constants';

export function loadData() {
  return {
    type: LOAD_DATA,
  };
}

export function loadDataSuccess(data) {
  return {
    type: LOAD_DATA_SUCCESS,
    payload: data,
  };
}

export function loadDataFailure(error) {
  return {
    type: LOAD_DATA_FAILURE,
    payload: { error },
  };
}

export function changeFilter(value) {
  return {
    type: CHANGE_FILTER,
    payload: { value },
  };
}

export function search(query) {
  return {
    type: SEARCH,
    payload: { query },
  };
}
