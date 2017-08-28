// @flow
import type { AppState } from '../../types';
import type { Coin } from './coinlist.types';

/**
 * Select all the coins
 *
 * @param {AppState} state
 */
export const selectCoins = (state: AppState): Array<Coin> => {
  return state.coins.all.map(coin => state.coins.data[coin]);
};

/**
 * Select coins from the user's hodl list
 *
 * @param {AppState} state
 */
export const selectHodls = (state: AppState): Array<Coin> => {
  return state.coins.hodls
    ? state.coins.hodls
        .map(coin => state.coins.data[coin])
        .sort(sortByMarketCap)
    : [];
};

/**
 * Select coins that are not listed in the user's hodl list
 *
 * @param {AppState} state
 */
export const selectOthers = (state: AppState): Array<Coin> => {
  return state.coins.all
    .map(coin => {
      return state.coins.data[coin];
    })
    .filter(coin => {
      return !state.coins.hodls.includes(coin.id);
    })
    .sort(sortByMarketCap);
};

/**
 * Coins by market cap sorting
 *
 * @param {Coin} a
 * @param {Coin} b
 */
const sortByMarketCap = (a: Coin, b: Coin) => {
  if (a.market_cap_usd > b.market_cap_usd) return -1;
  if (a.market_cap_usd < b.market_cap_usd) return 1;
  return 0;
};
