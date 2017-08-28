// @flow
export default {
  histoMinute: (coinSymbol: string, fiatSymbol: string) => {
    return fetch(
      `https://min-api.cryptocompare.com/data/histominute?fsym=${coinSymbol}&tsym=${fiatSymbol}&e=CCCAGG`
    ).then(res => res.json());
  }
};
