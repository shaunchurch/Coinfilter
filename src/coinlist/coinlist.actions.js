// @flow
import type { Action, ApiCoin } from './coinlist.types';

export const resCoins = (coins: Array<ApiCoin>): Action => {
  return {
    type: 'coinlist/RES_COINS_SUCCESS',
    payload: coins
  };
};
