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

    let moon = true;
    if (coin.percent_change_1h < 0) {
      moon = false;
    }
    return (
      <Row>
        <Rank>
          {coin.rank}
        </Rank>
        <Logo width={30}>
          <img
            src={`https://files.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`}
          />
        </Logo>
        <Price moon={moon}>
          <NumberFormat
            value={coin.price_usd}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
        </Price>
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
  margin: 8px 0;
  padding: 8px 0;
  color: #999;
  transition: color .15s ease-in-out, background-color .15s ease-in-out;
  &:hover {
    color: #333;
    background-color: #f9f9f9;
  }
`;

const Cell = styled.div`
  display: flex;
  min-width: 180px;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  align-items: center;
  text-align: right;
  justify-content: flex-end;
  font-family: 'menlo', 'monaco', 'courier', monospace;
`;

const Price = Cell.extend`
  width: 110px;
  color: ${props => (props.moon ? props.theme.green : props.theme.red)};
`;

const Logo = styled.div`width: 40px;`;
const Rank = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  color: #ccc;
`;

export default CoinRow;
