import { selectOthers } from '../coinlist.selectors';
import OthersJSON from '../../../testutils/data/Others.json';
import AppState from '../../../testutils/data/AppState.json';

describe('coinlist.selectors', () => {
  describe('selectOthers', () => {
    it('should return only coins not in the hodl list', () => {
      const expected = OthersJSON;
      const actual = selectOthers(AppState);
      expect(actual).toEqual(expected);
    });
  });
});
