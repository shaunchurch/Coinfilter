// @flow
import React, { Component } from 'react';
import { CoinListContainer } from './modules/coinlist';

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <CoinListContainer />
      </div>
    );
  }
}

export default App;
