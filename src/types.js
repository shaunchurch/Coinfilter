// @flow
import type { Coin } from './modules/coinlist';

/* The top level app state */
export type AppState = {
  coins: {
    all: Array<Coin>
  }
};
