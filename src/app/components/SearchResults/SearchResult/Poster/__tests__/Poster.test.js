import React from 'react';
import { shallow } from 'enzyme';
import Poster from './Poster';

describe('<Poster />', () => {
  it('renders an image', () => {
    const wrapper = shallow(<Poster />)
    expect(wrapper.containsMatchingElement(<img />)).toBe(true);
  });
})
