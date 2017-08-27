import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import CoinList from '../CoinList';
import CoinJSON from '../../../testutils/data/Coin.json';

describe('<CoinList />', () => {
  it('should render a loading item when list is empty', () => {
    const wrapper = mount(<CoinList coins={[]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render a list of coins when supplied', () => {
    const wrapper = mount(<CoinList coins={CoinJSON} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
