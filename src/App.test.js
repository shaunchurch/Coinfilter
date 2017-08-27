import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureMockStore from 'redux-mock-store';

const createStore = configureMockStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore({ coins: { all: [] } });
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
