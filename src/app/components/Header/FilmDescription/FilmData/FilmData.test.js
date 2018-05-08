import React from 'react';
import { shallow } from 'enzyme';
import FilmData from './FilmData';
import Brief from './Brief';
import Synopsis from './Synopsis';

describe('<FilmData />', () => {
  const mockInitialState = {
    title: 'mock',
    rating: 999,
    year: 2018,
    duration: 100,
    genres: 'drama',
    overview: 'overview',
  };

  it('renders Brief', () => {
    const wrapper = shallow(<FilmData filmData={ mockInitialState } />);
    expect(wrapper.find(Brief).exists()).toBe(true);
  });

  it('renders Synopsis', () => {
    const wrapper = shallow(<FilmData  filmData={ mockInitialState }/>);
    expect(wrapper.find(Synopsis).exists()).toBe(true);
  });
});
