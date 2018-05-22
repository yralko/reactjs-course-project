import React from 'react';
import { shallow } from 'enzyme';
import { SearchResults } from '../SearchResults';
import SearchResult from '../SearchResult';

describe('<SearchResults />', () => {
  const mockState = {
    foundFilms: [
      { title: 'film3' },
      { title: 'film2' },
      { title: 'film1' },
      { title: 'film4' },
      { title: 'film5' },
    ],
    sortParameter: 'title',
  }

  it('renders a list of films', () => {
    const wrapper = shallow(<SearchResults
      fetchedFilms={mockState.foundFilms}
      sortParameter={mockState.sortParameter}
    />);

    expect(wrapper.find(SearchResult)).toHaveLength(5);
  });

  it('renders \'No films found\' if no films have been found', () => {
    const wrapper = shallow(<SearchResults foundFilms={[]} />);
    expect(wrapper.find('p').text()).toMatch(/No films found/);
  });
});
