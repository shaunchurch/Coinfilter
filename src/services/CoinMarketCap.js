export default {
  ticker: () => {
    return fetch(
      'https://api.coinmarketcap.com/v1/ticker/?limit=50'
    ).then(res => res.json());
  }
};
