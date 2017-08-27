import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CoinRow from '../CoinRow';
import CoinJSON from '../../../../testutils/data/Coin.json';
import { Price } from '../styled';

describe('<CoinRow />', () => {
  it('should render a coin row positive', () => {
    const wrapper = shallow(<CoinRow coin={CoinJSON[0]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render a coin row negative', () => {
    const wrapper = shallow(<CoinRow coin={CoinJSON[1]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render in the correct style when moon', () => {
    const wrapper = shallow(<Price moon={true} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render <Price /> in the correct style when no moon', () => {
    const wrapper = shallow(<Price moon={false} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
