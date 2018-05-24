import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input';

describe('<Input />', () => {
  it('renders an input', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('input').exists()).toBeTruthy();
  });
});
