import React from 'react';
import renderer from 'react-test-renderer';
import Poster from './Poster';

test('matches snapshot', () => {
  const tree = renderer.create(<Poster />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
