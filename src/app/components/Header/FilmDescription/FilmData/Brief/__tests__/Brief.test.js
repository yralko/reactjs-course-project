import React from 'react';
import { shallow } from 'enzyme';
import Brief from '../Brief';

describe('<Brief />', () => {
  const mockState = {
    genres: ['drama', 'thriller', 'action'],
    title: 'film1',
    rating: 9.3,
    year: '2016-08-14',
    duration: 104,
  }

  it('renders', () => {
    const wrapper = shallow(<Brief {...mockState}/>)
    expect(wrapper.contains(<h2>Film name film1</h2>)).toBe(true);
  })

  it('renders', () => {
    const wrapper = shallow(<Brief {...mockState} />)
    expect(wrapper.find('p').exists()).toBe(true);
  });
});
