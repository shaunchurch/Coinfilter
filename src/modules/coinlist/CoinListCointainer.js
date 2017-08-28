// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reqCoins, doAddHodl, doRemoveHodl } from './coinlist.actions';
import { selectCoins, selectHodls, selectOthers } from './coinlist.selectors';
import CoinList from './components/CoinList';
import type { AppState } from '../../types';
import type { Connector } from 'react-redux';
import type { Coin } from './coinlist.types';

type Props = {
  coins: Array<Coin>,
  others: Array<Coin>,
  hodls: Array<Coin>,
  doAddHodl: Function,
  doRemoveHodl: Function,
  doReqCoins: Function
};

class CoinListContainer extends Component<Props> {
  componentDidMount() {
    this.props.doReqCoins();
  }

  handleAddHodl = (coinId: string) => {
    this.props.doAddHodl(coinId);
  };

  handleRemoveHodl = (coinId: string) => {
    this.props.doRemoveHodl(coinId);
  };

  render() {
    const { hodls, others, coins } = this.props;
    return (
      <div>
        <CoinList
          title="Hodl Coins"
          coins={hodls}
          handleClick={this.handleRemoveHodl}
        />
        <CoinList
          title={'Other Coins'}
          coins={others}
          handleClick={this.handleAddHodl}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    coins: selectCoins(state),
    others: selectOthers(state),
    hodls: selectHodls(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    doAddHodl: (coinId: string) => {
      dispatch(doAddHodl(coinId));
    },
    doRemoveHodl: (coinId: string) => {
      dispatch(doRemoveHodl(coinId));
    },
    doReqCoins: () => {
      dispatch(reqCoins());
    }
  };
};

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default connector(CoinListContainer);
