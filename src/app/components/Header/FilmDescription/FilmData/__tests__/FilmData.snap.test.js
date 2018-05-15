import React from 'react';
import renderer from 'react-test-renderer';
import FilmData from './FilmData';

test('matches snapshot', () => {
  const mockInitialState = {
    title: 'mock',
    rating: 999,
    release_date: '2018-10-23',
    duration: 100,
    genres: 'drama',
    overview: 'overview',
  };

  const tree = renderer.create(<FilmData filmData={mockInitialState} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
