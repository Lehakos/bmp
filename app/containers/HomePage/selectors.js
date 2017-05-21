import { createSelector } from 'reselect';
import union from 'lodash/union';
import { PAGE_SIZE } from './constants';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = () => (state) => state.get('homePage');

/**
 * Other specific selectors
 */
const selectTableData = createSelector(
  selectHomePageDomain(),
  (state) => state.get('data')
);

const selectFilter = createSelector(
  selectHomePageDomain(),
  (state) => state.get('filter')
);

const selectSearchQuery = createSelector(
  selectHomePageDomain(),
  (state) => state.get('searchQuery')
);

const selectPage = createSelector(
  selectHomePageDomain(),
  (state) => state.get('currentPage')
);

const selectFilteredData = createSelector(
  [selectTableData, selectFilter, selectSearchQuery],
  (dataImmutable, filter, query) => {
    let data = dataImmutable.toJS();

    data = data.filter((item) => {
      if (filter !== 'все' && item.country.toLowerCase() !== filter) {
        return false;
      }

      if (query && item.name.toLowerCase().indexOf(query) === -1) {
        return false;
      }

      return true;
    });

    return data.map((item) => [
      item.name,
      `${item.city ? `${item.city}, ` : ''}${item.country}`,
      item.organization,
      item.description,
    ]);
  }
);

const makeCurrentPageData = () => createSelector(
  [selectFilteredData, selectPage],
  (data, currentPage) => {
    const startInd = (currentPage - 1) * PAGE_SIZE;
    const endInd = startInd + PAGE_SIZE;

    return data.slice(startInd, endInd);
  }
);

const makeTotalPages = () => createSelector(
  [selectFilteredData],
  (data) => Math.ceil(data.length / PAGE_SIZE)
);

const makeCities = () => createSelector(
  selectTableData,
  (data) => union(data.toJS().map((item) => item.city))
);

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () => createSelector(
  selectHomePageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHomePage;
export {
  makeCurrentPageData,
  makeTotalPages,
  makeCities,
};
