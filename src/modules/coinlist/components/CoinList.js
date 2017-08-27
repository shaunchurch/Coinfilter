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
        <Title>coinage</Title>
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
  max-width: 600px;
  margin: 0 auto;
  padding: 0;
`;

const Title = styled.h1`
  text-align: center;
  font-family: menlo, monaco, courier, monospace;
`;

export default CoinList;
