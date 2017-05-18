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
