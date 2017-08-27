// @flow
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { CoinListContainer } from './modules/coinlist';

class App extends Component<{}> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CoinListContainer />
      </ThemeProvider>
    );
  }
}

export default App;
