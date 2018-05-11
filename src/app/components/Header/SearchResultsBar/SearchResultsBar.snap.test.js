import React from 'react';
import renderer from 'react-test-renderer';
import { SearchResultsBar } from './SearchResultsBar';

test('matches snapshot', () => {
  const mockState = {
    foundFilms: [
      { title: 'film1' },
      { title: 'film2' },
      { title: 'film3' },
    ],
  };

  const tree = renderer.create(<SearchResultsBar foundFilms={mockState.foundFilms} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
