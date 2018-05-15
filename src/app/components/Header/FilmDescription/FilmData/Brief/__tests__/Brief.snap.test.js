import React from 'react';
import renderer from 'react-test-renderer';
import Brief from './Brief';

test('matches snapshot', () => {
  const mockState = {
    genres: ['drama', 'thriller', 'action'],
    title: 'film1',
    rating: 9.3,
    year: '2016-08-14',
    duration: 104,
  }

  const tree = renderer.create(<Brief {...mockState} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
