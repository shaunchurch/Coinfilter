// @flow
import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { Row, Rank, Logo, Price, Cell } from './styled';

import type { Coin } from '../coinlist.types';

type Props = {
  coin: Coin,
  handleClick?: Function
};

class CoinRow extends Component<Props> {
  handleAddCoin = () => {
    const { coin, handleClick } = this.props;
    if (handleClick) {
      handleClick(coin.id);
    }
  };

  render() {
    const { coin, handleClick } = this.props;

    let moon = true;
    if (coin.percent_change_1h < 0) {
      moon = false;
    }
    return (
      <Row onClick={handleClick ? this.handleAddCoin : null}>
        <Rank>
          {coin.rank}
        </Rank>
        <Logo width={30}>
          <img
            src={`https://files.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`}
            alt={coin.name}
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

export default CoinRow;
