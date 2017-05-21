/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
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

export const initialState = fromJS({
  data: [],
  dataLoading: true,
  pendingNewEntry: false,
  filter: 'все',
  error: null,
  searchQuery: '',
  modal: null,
  currentPage: 1,
});

function homePageReducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case LOAD_DATA:
      return state
        .set('dataLoading', true)
        .set('data', fromJS([]));

    case LOAD_DATA_SUCCESS:
      return state
        .set('dataLoading', false)
        .set('data', fromJS(payload));

    case LOAD_DATA_FAILURE:
      return state
        .set('dataLoading', false)
        .set('error', payload.error);

    case CHANGE_FILTER:
      return state
        .set('filter', payload.value.toLowerCase())
        .set('currentPage', 1);

    case SEARCH:
      return state
        .set('searchQuery', payload.query.toLowerCase())
        .set('currentPage', 1);

    case OPEN_MODAL:
      return state.set('modal', payload.modal);

    case CLOSE_MODAL:
      return state.set('modal', null);

    case ADD_ENTRY:
      return state.set('pendingNewEntry', true);

    case ADD_ENTRY_SUCCESS:
      return state
        .update('data', (data) => data.unshift(fromJS(payload)))
        .set('pendingNewEntry', false);

    case ADD_ENTRY_FAILURE:
      return state.set('pendingNewEntry', false);

    case CHANGE_PAGINATION:
      return state.set('currentPage', payload.pageNum);

    default:
      return state;
  }
}

export default homePageReducer;
