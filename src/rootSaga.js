// @flow
import { all } from 'redux-saga/effects';
import { CoinListSaga } from './modules/coinlist';

export default function* rootSaga() {
  yield all([CoinListSaga()]);
}
