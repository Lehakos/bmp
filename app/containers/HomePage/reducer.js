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
  ADD_ENTRY_SUCCESS,
  CHANGE_PAGINATION,
} from './constants';

const initialState = fromJS({
  data: [],
  filter: 'все',
  loading: true,
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
        .set('loading', true)
        .set('data', fromJS([]));

    case LOAD_DATA_SUCCESS:
      return state
        .set('loading', false)
        .set('data', fromJS(payload));

    case LOAD_DATA_FAILURE:
      return state
        .set('loading', false)
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

    case ADD_ENTRY_SUCCESS:
      return state.update('data', (data) => data.unshift(fromJS(payload)));

    case CHANGE_PAGINATION:
      return state.set('currentPage', payload.pageNum);

    default:
      return state;
  }
}

export default homePageReducer;
