import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Header from './Header';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

test('renders non-empty component without crashing', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.exists()).toBe(true)
});