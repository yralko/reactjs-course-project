import React from 'react';
import renderer from 'react-test-renderer';
import Synopsis from '../Synopsis';

test('matches snapshot', () => {
  const tree = renderer.create(<Synopsis />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
