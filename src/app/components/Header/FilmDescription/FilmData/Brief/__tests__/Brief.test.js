import React from 'react';
import { shallow } from 'enzyme';
import Brief from '../Brief';

describe('<Brief />', () => {
  const filmData = {
    title: 'film1',
    rating: 9,
    year: '2017-04-12',
    duration: 102,
    genres: ['Drama', 'Action'],
    overview: 'Lorem ipsum dolor sit amet.',
  };

  it('renders heading', () => {
    const wrapper = shallow(<Brief {...filmData} />);
    expect(wrapper.find('h2').text()).toBe(`Film name ${filmData.title}`);
  });

  it('renders paragraph with proper text', () => {
    const wrapper = shallow(<Brief {...filmData} />);
    expect(wrapper.find('p').text()).toBe('Drama & Action');
  });

  it('renders three spans', () => {
    const wrapper = shallow(<Brief {...filmData} />);
    expect(wrapper.find('span')).toHaveLength(3);
  })
});
