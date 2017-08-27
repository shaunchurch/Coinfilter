// @flow
import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

import type { Coin } from '../coinlist.types';

type Props = {
  coin: Coin
};

class CoinRow extends Component<Props> {
  render() {
    const { coin } = this.props;
    return (
      <li>
        <img
          src={`https://files.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`}
        />
        {coin.name} -
        <strong>cap:</strong>
        <NumberFormat
          value={coin.market_cap_usd}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
        />
        <strong>vol:</strong>
        <NumberFormat
          value={coin['24h_volume_usd']}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
        />
        <strong>coin:</strong>
        <NumberFormat
          value={coin.price_usd}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
        />
      </li>
    );
  }
}

export default CoinRow;
