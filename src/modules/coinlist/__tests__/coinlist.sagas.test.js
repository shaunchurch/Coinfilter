import sagaHelper from 'redux-saga-testing';
import { all, put, call, select } from 'redux-saga/effects';
import { fetchCoins } from '../coinlist.sagas';
import { resCoins, resCoinsFail } from '../coinlist.actions';
import CoinMarketCap from '../../../services/CoinMarketCap';
import CMCTickerJSON from '../../../testutils/data/CoinMarketCap.ticker.json';

describe('coinlist.sagas', () => {
  describe('fetchCoins success', () => {
    const it = sagaHelper(fetchCoins());
    it('should call CoinMarketCap', result => {
      expect(result).toEqual(call(CoinMarketCap.ticker));
      return CMCTickerJSON;
    });

    it('should then put a received coins action', result => {
      expect(result).toEqual(put(resCoins(CMCTickerJSON)));
    });
  });

  describe('fetchCoins fail', () => {
    const it = sagaHelper(fetchCoins());
    it('should call CoinMarketCap but return failure', result => {
      expect(result).toEqual(call(CoinMarketCap.ticker));
      return new Error('Failed');
    });

    it('should then put a response coins fail action', result => {
      expect(result).toEqual(put(resCoinsFail(new Error('Failed'))));
    });
  });
});
