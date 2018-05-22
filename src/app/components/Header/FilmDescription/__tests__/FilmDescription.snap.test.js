import React from 'react';
import renderer from 'react-test-renderer';
import { FilmDescription } from '../FilmDescription';

test('matches snapshot', () => {
  const tree = renderer.create(<FilmDescription />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
