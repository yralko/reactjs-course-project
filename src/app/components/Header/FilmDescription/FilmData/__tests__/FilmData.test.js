import React from 'react';
import { shallow } from 'enzyme';
import FilmData from '../FilmData';
import Brief from '../Brief';
import Synopsis from '../Synopsis';

describe('<FilmData />', () => {
  const filmData = {
    title: 'film1',
    rating: 9,
    year: '2017-04-12',
    duration: 102,
    genres: ['Drama', 'Action'],
    overview: 'Lorem ipsum dolor sit amet.',
  };

  it('renders Brief component', () => {
    const wrapper = shallow(<FilmData filmData={filmData} />);
    expect(wrapper.find(Brief).exists()).toBe(true);
  });

  it('renders Synopsis component', () => {
    const wrapper = shallow(<FilmData filmData={filmData} />);
    expect(wrapper.find(Synopsis).exists()).toBe(true);
  });
});
