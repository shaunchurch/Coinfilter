// @flow
import type { Coin } from './modules/coinlist';

/* The top level app state */
export type AppState = {
  coins: {
    data: { [id: string]: Coin },
    all: Array<string>,
    hodls: Array<string>
  }
};
