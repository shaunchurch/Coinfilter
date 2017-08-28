// @flow
import { combineReducers } from 'redux';
import type { ApiCoin, Coin, Action } from './coinlist.types';

type AllState = {
  [id: string]: Coin
};

export const data = (state: AllState = {}, action: Action): AllState => {
  switch (action.type) {
    case 'coinlist/RES_COINS_SUCCESS':
      const coinsObj = {};
      action.payload.map((coin: ApiCoin) => {
        return (coinsObj[coin.id] = typeCoin(coin));
      });
      return coinsObj;
    default:
      return state;
  }
};

export const all = (
  state: Array<string> = [],
  action: Action
): Array<string> => {
  switch (action.type) {
    case 'coinlist/RES_COINS_SUCCESS':
      const coins = action.payload.map((coin: ApiCoin) => {
        const { id } = coin;
        return id;
      });
      return coins;
    default:
      return state;
  }
};

export const hodls = (
  state: Array<string> = [],
  action: Action
): Array<string> => {
  switch (action.type) {
    case 'coinlist/ADD_HODL':
      return state.includes(action.payload)
        ? state
        : [...state, action.payload];
    case 'coinlist/REMOVE_HODL':
      return state.filter(item => item !== action.payload);
    default:
      return state;
  }
};

/**
 * Convert ApiCoin objects with all string values to numbers when
 * the value is a number.
 */
const typeCoin = (coin: ApiCoin): Coin => {
  return {
    '24h_volume_usd': parseInt(coin['24h_volume_usd'], 10),
    available_supply: parseInt(coin.available_supply, 10),
    id: coin.id,
    last_updated: parseInt(coin.last_updated, 10),
    market_cap_usd: parseInt(coin.market_cap_usd, 10),
    name: coin.name,
    percent_change_1h: parseFloat(coin.percent_change_1h),
    percent_change_7d: parseFloat(coin.percent_change_7d),
    percent_change_24h: parseFloat(coin.percent_change_24h),
    price_btc: parseFloat(coin.price_btc),
    price_usd: parseFloat(coin.price_usd),
    rank: parseInt(coin.rank, 10),
    symbol: coin.symbol,
    total_supply: parseInt(coin.total_supply, 10)
  };
};

export default combineReducers({
  data,
  all,
  hodls
});
