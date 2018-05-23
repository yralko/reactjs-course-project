import React from 'react';
import { shallow } from 'enzyme';
import Synopsis from '../Synopsis';

describe('<Synopsis />', () => {
  it('renders paragraph with proper text', () => {
    const wrapper = shallow(<Synopsis overview="Test 1" />);
    expect(wrapper.find('p').text()).toBe('Test 1');
  });
});
