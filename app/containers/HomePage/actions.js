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
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_ENTRY,
  ADD_ENTRY_SUCCESS,
  ADD_ENTRY_FAILURE,
  CHANGE_PAGINATION,
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

export function openModal(modal) {
  return {
    type: OPEN_MODAL,
    payload: { modal },
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

export function addEntry(data) {
  return {
    type: ADD_ENTRY,
    payload: data,
  };
}

export function addEntrySuccess(data) {
  return {
    type: ADD_ENTRY_SUCCESS,
    payload: data,
  };
}

export function addEntryFailure(error) {
  return {
    type: ADD_ENTRY_FAILURE,
    payload: { error },
  };
}

export function changePagination(pageNum) {
  return {
    type: CHANGE_PAGINATION,
    payload: { pageNum },
  };
}
