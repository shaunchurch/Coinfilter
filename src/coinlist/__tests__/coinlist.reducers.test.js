// @flow
import { all } from '../coinlist.reducers';
import { resCoins } from '../coinlist.actions';
import CoinJSON from '../../testutils/data/Coin.json';
import ApiCoinJSON from '../../testutils/data/ApiCoin.json';

describe('coinlist.reducers', () => {
  describe('all', () => {
    const action = it('should init with an empty array', () => {
      const expected = [];
      const actual = all(undefined, {
        type: 'coinlist/REQ_COINS',
        payload: null
      });
      expect(actual).toEqual(expected);
    });

    it('should return the current state for unrecognised actions', () => {
      const expected = CoinJSON;
      const actual = all(CoinJSON, {
        type: 'coinlist/REQ_COINS',
        payload: []
      });
      expect(actual).toEqual(expected);
    });

    it('should return the ApiCoin into Coin', () => {
      const expected = CoinJSON;
      const actual = all(ApiCoinJSON, {
        type: 'coinlist/RES_COINS_SUCCESS',
        payload: ApiCoinJSON
      });
      expect(actual).toEqual(expected);
    });
  });
});
