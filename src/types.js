// @flow
import type { Coin } from './coinlist';

/* The top level app state */
export type AppState = {
  coins: {
    all: Array<Coin>
  }
};
