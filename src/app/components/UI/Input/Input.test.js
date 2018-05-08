import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('<Input />', () => {
  it('returns an input', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('triggers changed() on change', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Input changed={mockFn}/>)
    wrapper.find('input').simulate('change');
  });

  it('triggers keyReleased() on key up', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Input keyReleased={() => mockFn()}/>)
    wrapper.find('input').simulate('keyUp');
  });
});
