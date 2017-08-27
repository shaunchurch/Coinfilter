// @flow
import type { AppState } from '../../types';

export const selectCoins = (state: AppState) => state.coins.all;
