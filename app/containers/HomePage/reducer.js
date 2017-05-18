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
} from './constants';

const initialState = fromJS({
  data: [],
  filter: 'все',
  loading: true,
  error: null,
  searchQuery: '',
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
      return state.set('filter', payload.value.toLowerCase());

    case SEARCH:
      return state.set('searchQuery', payload.query.toLowerCase());

    default:
      return state;
  }
}

export default homePageReducer;