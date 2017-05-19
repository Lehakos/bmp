import { createSelector } from 'reselect';
import union from 'lodash/union';

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

const makeTableData = () => createSelector(
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
  selectHomePageDomain,
  makeTableData,
  makeCities,
};
