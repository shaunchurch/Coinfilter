// @flow
import { all, hodls, data } from '../coinlist.reducers';
import { resCoins } from '../coinlist.actions';
import CoinJSON from '../../../testutils/data/Coin.json';
import ApiCoinJSON from '../../../testutils/data/ApiCoin.json';
import KeyedCurrenciesJSON from '../../../testutils/data/KeyedCurrencies.json';

describe('coinlist.reducers', () => {
  describe('all', () => {
    it('should init with an empty array', () => {
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
      expect(actual[0]).toEqual(expected[0].id);
    });
  });

  describe('hodls', () => {
    it('should init with an empty array', () => {
      const expected = [];
      const actual = hodls(undefined, {
        type: 'coinlist/REQ_COINS'
      });
      expect(actual).toEqual(expected);
    });

    it('should return the current state for unrecognised actions', () => {
      const expected = ['one', 'two', 'three'];
      const actual = hodls(expected, {
        type: 'coinlist/REQ_COINS'
      });
      expect(actual).toEqual(expected);
    });

    it('should add the item to the current state when ADD_HODL action', () => {
      const expected = ['one', 'two', 'three'];
      const actual = hodls(['one', 'two'], {
        type: 'coinlist/ADD_HODL',
        payload: 'three'
      });
      expect(actual).toEqual(expected);
    });

    it('should remove the item from the state when REMOVE_HODL action', () => {
      const expected = ['one', 'two'];
      const actual = hodls(['one', 'two', 'three'], {
        type: 'coinlist/REMOVE_HODL',
        payload: 'three'
      });
      expect(actual).toEqual(expected);
    });
  });

  describe('data', () => {
    it('should init with an empty object', () => {
      const expected = {};
      const actual = data(undefined, {
        type: 'coinlist/REQ_COINS'
      });
      expect(actual).toEqual(expected);
    });

    it('should convert API array payload into object with currency symbol keys', () => {
      const expected = KeyedCurrenciesJSON;
      const actual = data(
        {},
        { type: 'coinlist/RES_COINS_SUCCESS', payload: ApiCoinJSON }
      );
      expect(actual).toEqual(expected);
    });
  });
});
