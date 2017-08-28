// @flow
export type Coin = {
  '24h_volume_usd': number,
  available_supply: number,
  id: string,
  last_updated: number,
  market_cap_usd: number,
  name: string,
  percent_change_1h: number,
  percent_change_7d: number,
  percent_change_24h: number,
  price_btc: number,
  price_usd: number,
  rank: number,
  symbol: string,
  total_supply: number
};

export type ApiCoin = {
  '24h_volume_usd': string,
  available_supply: string,
  id: string,
  last_updated: string,
  market_cap_usd: string,
  name: string,
  percent_change_1h: string,
  percent_change_7d: string,
  percent_change_24h: string,
  price_btc: string,
  price_usd: string,
  rank: string,
  symbol: string,
  total_supply: string
};

export type Action =
  | { type: 'coinlist/REQ_COINS' }
  | { type: 'coinlist/RES_COINS_SUCCESS', payload: Array<ApiCoin> }
  | { type: 'coinlist/RES_COINS_FAIL', error: Error }
  | { type: 'coinlist/ADD_HODL', payload: string }
  | { type: 'coinlist/REMOVE_HODL', payload: string };
