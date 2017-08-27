// @flow
import { all } from '../coinlist.reducers';
import { resCoins } from '../coinlist.actions';
import CoinJSON from '../../testutils/data/Coin.json';
import ApiCoinJSON from '../../testutils/data/ApiCoin.json';

describe('coinlist.actions', () => {
  describe('resCoins', () => {
    it('should return a coinlist/RES_COINS_SUCCESS action', () => {
      const actual = resCoins(ApiCoinJSON);
      expect(actual).toMatchSnapshot();
    });
  });
});
