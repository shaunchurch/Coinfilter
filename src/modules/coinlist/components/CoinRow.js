// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

import type { Coin } from '../coinlist.types';

type Props = {
  coin: Coin
};

class CoinRow extends Component<Props> {
  render() {
    const { coin } = this.props;
    return (
      <Row>
        <Logo width={30}>
          <img
            src={`https://files.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`}
          />
        </Logo>
        <Cell>
          <NumberFormat
            value={coin.price_usd}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
        </Cell>
        <Cell>
          <NumberFormat
            value={coin.market_cap_usd}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
        </Cell>
        <Cell>
          <NumberFormat
            value={coin['24h_volume_usd']}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
        </Cell>
      </Row>
    );
  }
}

const Row = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  margin: 16px 0;
  padding: 0;
  color: #999;
  &:hover {
    color: #222;
    background-color: #f9f9f9;
  }
  transition: color, backgroud-color .15s ease-in-out;
`;

const Cell = styled.div`
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  align-items: center;
  text-align: right;
  font-family: 'menlo', 'monaco', 'courier', monospace;
`;

const Logo = styled.div`width: 40px;`;

export default CoinRow;
