import { combineReducers } from 'redux';
import { CoinListReducer } from './modules/coinlist';

export default combineReducers({
  coins: CoinListReducer
});
