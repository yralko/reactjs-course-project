import React from 'react';
import renderer from 'react-test-renderer';
import SearchResult from '../SearchResult';

test('matches snapshot', () => {
  const mockState = {
    genres: ['drama', 'action', 'thriller'],
    release_date: '2018-10-04',
  };

  const tree = renderer.create(<SearchResult {...mockState} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
