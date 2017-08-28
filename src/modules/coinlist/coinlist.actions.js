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

export const resCoinsFail = (error: Error): Action => {
  return {
    type: 'coinlist/RES_COINS_FAIL',
    error
  };
};

export const doAddHodl = (coinId: string): Action => {
  return {
    type: 'coinlist/ADD_HODL',
    payload: coinId
  };
};

export const doRemoveHodl = (coinId: string): Action => {
  return {
    type: 'coinlist/REMOVE_HODL',
    payload: coinId
  };
};
