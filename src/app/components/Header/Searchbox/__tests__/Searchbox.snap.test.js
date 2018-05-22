import React from 'react';
import renderer from 'react-test-renderer';
import { Searchbox } from '../Searchbox';

test('matches snapshot', () => {
  const mockState = {
    filter: 'title',
    inputValue: '',
    fetchedFilms: [{ title: 'film1', genre: 'action' }, { title: 'film2', genre: 'thriller' }, { title: 'film3', genre: 'action' }],
  };

  const tree = renderer.create(<Searchbox {...mockState} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
