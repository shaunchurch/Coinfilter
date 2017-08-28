// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import CoinRow from './CoinRow';
import type { Coin } from '../coinlist.types';

type Props = {
  title: string,
  coins: Array<Coin>,
  handleClick: Function
};

class CoinList extends Component<Props> {
  render() {
    const { coins, handleClick, title } = this.props;

    return (
      <div>
        <Title>
          {title}
        </Title>
        <List>
          {coins.length
            ? coins.map(coin =>
                <CoinRow key={coin.id} coin={coin} handleClick={handleClick} />
              )
            : <li>Loading coins...</li>}
        </List>
      </div>
    );
  }
}

const List = styled.ul`
  max-width: 620px;
  margin: 0 auto;
  padding: 0;
`;

const Title = styled.h1`
  text-align: center;
  font-family: menlo, monaco, courier, monospace;
`;

export default CoinList;
