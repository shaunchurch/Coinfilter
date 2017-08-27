import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import CoinRow from '../CoinRow';
import CoinJSON from '../../../../testutils/data/Coin.json';
import { Price } from '../styled';
import theme from '../../../../theme';
import 'jest-styled-components';

describe('<CoinRow />', () => {
  it('should render a coin row positive', () => {
    const wrapper = shallow(<CoinRow coin={CoinJSON[0]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render a coin row negative', () => {
    const wrapper = shallow(<CoinRow coin={CoinJSON[1]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render <Price /> in the correct style when moon', () => {
    const tree = toJson(shallow(<Price moon={true} theme={theme} />));
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('color', theme.green);
  });

  it('should render <Price /> in the correct style when no moon', () => {
    const tree = toJson(shallow(<Price moon={false} theme={theme} />));
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('color', theme.red);
  });
});
