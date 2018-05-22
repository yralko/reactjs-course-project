import React from 'react';
import renderer from 'react-test-renderer';
import Brief from '../Brief';

test('matches snapshot', () => {
  const tree = renderer.create(<Brief />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
