// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
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
        <List>
          {coins.length > 0
            ? coins.map(coin => <CoinRow key={coin.id} coin={coin} />)
            : <li>Loading coins...</li>}
        </List>
      </div>
    );
  }
}

const List = styled.ul`
  max-width: 640px;
  margin: 0 auto;
  padding: 0;
`;

export default CoinList;
