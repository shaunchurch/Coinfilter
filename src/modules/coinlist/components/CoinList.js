// @flow
import React, { Component } from 'react';
import CoinRow from './CoinRow';
import type { Coin } from '../coinlist.types';

type Props = {
  coins: Array<Coin>
};

class CoinList extends Component<Props> {
  render() {
    const { coins } = this.props;
    return (
      <div>
        <h1>CoinList</h1>
        <ul>
          {coins.length > 0
            ? coins.map(coin => <CoinRow key={coin.id} coin={coin} />)
            : <li>Loading coins...</li>}
        </ul>
      </div>
    );
  }
}

export default CoinList;
