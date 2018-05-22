import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../Input';

test('matches snapshot', () => {
  const tree = renderer.create(<Input />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
