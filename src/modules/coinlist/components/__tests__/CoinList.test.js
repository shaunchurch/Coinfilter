import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CoinList from '../CoinList';
import CoinJSON from '../../../../testutils/data/Coin.json';

describe('<CoinList />', () => {
  it('should render a loading item when list is empty', () => {
    const wrapper = shallow(<CoinList coins={[]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render a list of coins when supplied', () => {
    const wrapper = shallow(<CoinList coins={CoinJSON} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
