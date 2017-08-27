import { put } from 'redux-saga/effects';
import fetchCoins from '../coinlist.sagas';

describe('coinlist.sagas', () => {
  describe('fetchCoins', () => {
    it('should call CoinMarketCap', () => {
      const gen = fetchCoins();
      expect.deepEqual(
        gen.next().value,
        put(fetchCoins()),
        'it should do stuff'
      );
    });
  });
});
