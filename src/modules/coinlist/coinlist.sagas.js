// @noflow
import { all, call, put, takeLatest } from 'redux-saga/effects';
import CoinMarketCap from '../../services/CoinMarketCap';
import { resCoins, resCoinsFail } from './coinlist.actions';
import type { Action, ApiCoin } from './coinlist.types';

function* watchFetchCoins() {
  yield takeLatest('coinlist/REQ_COINS', fetchCoins);
}

export const fetchCoins = function*(action: Action) {
  try {
    const apiCoins = yield call(CoinMarketCap.ticker);
    yield put(resCoins(apiCoins));
  } catch (e) {
    yield put(resCoinsFail(e));
  }
};
export default function* rootSaga() {
  yield all([watchFetchCoins()]);
}
