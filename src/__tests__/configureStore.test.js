import configureStore from '../configureStore';

describe('configureStore', () => {
  it('should render the initial store state', () => {
    const store = configureStore();
    const state = store.getState();
    expect(state).toMatchSnapshot('initialState');
  });
});
