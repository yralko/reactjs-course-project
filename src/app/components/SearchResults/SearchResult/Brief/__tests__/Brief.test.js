import React from 'react';
import { shallow } from 'enzyme';
import Brief from './Brief';

describe('Brief', () => {
  it('contains a heading', () => {
    const wrapper = shallow(<Brief />)
    expect(wrapper.find('h4').exists()).toBe(true);
  })

  it('contains a heading', () => {
    const wrapper = shallow(<Brief />)
    expect(wrapper.find('span').exists()).toBe(true);
  })

  it('contains a heading', () => {
    const wrapper = shallow(<Brief />)
    expect(wrapper.find('p').exists()).toBe(true);
  })
})
