import React from 'react';
import renderer from 'react-test-renderer';
import { CurrentFilm } from './CurrentFilm';

test('matches snapshot', () => {
  const tree = renderer.create(<CurrentFilm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
