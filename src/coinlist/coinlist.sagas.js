// @flow
import { all, call, put, takeLatest } from 'redux-saga/effects';
import CoinMarketCap from '../api/CoinMarketCap';
import type { Action } from './coinlist.types';

function* watchFetchCoins() {
  yield takeLatest('coinlist/REQ_COINS', fetchCoins);
}

function* fetchCoins(action: Action) {
  try {
    const ApiCoins = yield call(CoinMarketCap.ticker);
    yield put({ type: 'coinlist/RES_COINS_SUCCESS', payload: ApiCoins });
  } catch (e) {
    yield put({ type: 'coinlist/RES_COINS_FAILED', message: e.message });
  }
}

export default function* rootSaga() {
  yield all([watchFetchCoins()]);
}
