// @flow
import { all } from '../coinlist.reducers';
import { resCoins, reqCoins, doAddHodl } from '../coinlist.actions';
import CoinJSON from '../../../testutils/data/Coin.json';
import ApiCoinJSON from '../../../testutils/data/ApiCoin.json';

describe('coinlist.actions', () => {
  describe('resCoins', () => {
    it('should return a coinlist/RES_COINS_SUCCESS action', () => {
      const actual = resCoins(ApiCoinJSON);
      expect(actual).toMatchSnapshot();
    });
  });

  describe('reqCoins', () => {
    it('should return a coinlist/REQ_COINS action', () => {
      const actual = reqCoins();
      expect(actual).toMatchSnapshot();
    });
  });

  describe('doAddHodl', () => {
    it('should return a coinlist/ADD_HODL action', () => {
      const actual = doAddHodl('bitcoin');
      expect(actual).toMatchSnapshot();
    });
  });
});
