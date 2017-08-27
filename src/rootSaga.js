// @flow
import { all } from 'redux-saga/effects';
import { CoinListSaga } from './coinlist';

export default function* rootSaga() {
  yield all([CoinListSaga()]);
}
