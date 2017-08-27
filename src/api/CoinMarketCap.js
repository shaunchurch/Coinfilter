export default {
  ticker: () => {
    return fetch(
      'https://api.coinmarketcap.com/v1/ticker/?limit=25'
    ).then(res => res.json());
  }
};
