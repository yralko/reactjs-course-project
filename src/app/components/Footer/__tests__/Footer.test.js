import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';
import Logo from '../../Logo/Logo';

describe('Footer', () => {
  const wrapper = shallow(<Footer />);

  it('has a logo', () => {
    expect(wrapper.find(Logo).exists()).toBe(true);
  });
});
