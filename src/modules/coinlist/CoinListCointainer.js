// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reqCoins } from './coinlist.actions';
import { selectCoins } from './coinlist.selectors';
import CoinList from './components/CoinList';
import type { AppState } from '../../types';
import type { Connector } from 'react-redux';
import type { Coin } from './coinlist.types';

type Props = {
  dispatch: Function,
  coins: Array<Coin>
};

class CoinListContainer extends Component<Props> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(reqCoins());
  }

  render() {
    return <CoinList coins={this.props.coins} {...this.props} />;
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    coins: selectCoins(state)
  };
};

const connector: Connector<{}, Props> = connect(mapStateToProps);
export default connector(CoinListContainer);
