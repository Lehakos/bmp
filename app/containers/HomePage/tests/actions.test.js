
import {
  loadData,
} from '../actions';
import {
  LOAD_DATA,
} from '../constants';

describe('HomePage actions', () => {
  describe('Load data', () => {
    it(`has a type of ${LOAD_DATA}`, () => {
      const expected = {
        type: LOAD_DATA,
      };
      expect(loadData()).toEqual(expected);
    });
  });
});
