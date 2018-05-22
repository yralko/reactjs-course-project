import React from 'react';
import renderer from 'react-test-renderer';
import { SearchResults } from '../SearchResults';

test('matches snapshot', () => {
  const mockState = {
    foundFilms: [
      {
        title: 'film3',
        genres: ['drama', 'action', 'thriller'],
        release_date: '2018-10-04',
      },
      {
        title: 'film2',
        genres: ['comedy', 'action'],
        release_date: '2010-02-12',
      },
      {
        title: 'film1',
        genres: ['drama', 'thriller'],
        release_date: '2012-07-09',
      },
    ],
    sortParameter: 'title',
  };

  const tree = renderer.create(<SearchResults {...mockState} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
