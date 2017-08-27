// @flow
import type { Action, ApiCoin } from './coinlist.types';

export const reqCoins = (): Action => {
  return {
    type: 'coinlist/REQ_COINS'
  };
};

export const resCoins = (coins: Array<ApiCoin>): Action => {
  return {
    type: 'coinlist/RES_COINS_SUCCESS',
    payload: coins
  };
};
