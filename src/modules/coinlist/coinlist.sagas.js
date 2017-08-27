// @flow
import { all, call, put, takeLatest } from 'redux-saga/effects';
import CoinMarketCap from '../../services/CoinMarketCap';
import type { Action, ApiCoin } from './coinlist.types';

function* watchFetchCoins() {
  yield takeLatest('coinlist/REQ_COINS', fetchCoins);
}

export const fetchCoins = function*(action: Action) {
  try {
    const apiCoins: Array<ApiCoin> = yield call(CoinMarketCap.ticker);
    yield put({ type: 'coinlist/RES_COINS_SUCCESS', payload: apiCoins });
  } catch (e) {
    yield put({ type: 'coinlist/RES_COINS_FAILED', message: e.message });
  }
};

export default function* rootSaga() {
  yield all([watchFetchCoins()]);
}
