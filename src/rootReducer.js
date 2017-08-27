import { combineReducers } from 'redux';
import { CoinListReducer } from './coinlist';

export default combineReducers({
  coins: CoinListReducer
});
