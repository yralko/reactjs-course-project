import React from 'react';
import renderer from 'react-test-renderer';
import { Main } from '../Main';

test('matches snapshot', () => {
  const tree = renderer.create(<Main />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
