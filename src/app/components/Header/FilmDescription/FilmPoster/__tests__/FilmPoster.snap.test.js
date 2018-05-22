import React from 'react';
import renderer from 'react-test-renderer';
import FilmPoster from '../FilmPoster';

test('matches snapshot', () => {
  const tree = renderer.create(<FilmPoster />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
