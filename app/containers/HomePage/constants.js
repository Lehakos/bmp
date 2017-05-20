/*
 *
 * HomePage constants
 *
 */

export const LOAD_DATA = 'app/HomePage/LOAD_DATA';
export const LOAD_DATA_SUCCESS = 'app/HomePage/LOAD_DATA_SUCCESS';
export const LOAD_DATA_FAILURE = 'app/HomePage/LOAD_DATA_FAILURE';
export const CHANGE_FILTER = 'app/HomePage/CHANGE_FILTER';
export const SEARCH = 'app/HomePage/SEARCH';
export const OPEN_MODAL = 'app/HomePage/OPEN_MODAL';
export const CLOSE_MODAL = 'app/HomePage/CLOSE_MODAL';
export const ADD_ENTRY = 'app/HomePage/ADD_ENTRY';
export const ADD_ENTRY_SUCCESS = 'app/HomePage/ADD_ENTRY_SUCCESS';
export const ADD_ENTRY_FAILURE = 'app/HomePage/ADD_ENTRY_FAILURE';
export const CHANGE_PAGINATION = 'app/HomePage/CHANGE_PAGINATION';

export const PAGE_SIZE = 8;

export const tableHeaders = [
  'Название',
  'Место создания',
  'Организация',
  'Описание',
];

export const countryFilters = [
  {
    value: 'все',
    label: 'Все страны',
  },
  {
    value: 'ссср',
    label: 'СССР',
  },
  {
    value: 'франция',
    label: 'Франция',
  },
  {
    value: 'россия',
    label: 'Россия',
  },
  {
    value: 'германия',
    label: 'Германия',
  },
];
