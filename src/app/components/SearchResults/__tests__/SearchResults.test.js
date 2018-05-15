import React from 'react';
import { shallow } from 'enzyme';
import { SearchResults, mapStateToProps, mapDispatchToProps, sortFilms } from './SearchResults';
import SearchResult from './SearchResult';

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
      foundFilms={mockState.foundFilms}
      sortParameter={mockState.sortParameter}
    />);

    expect(wrapper.find(SearchResult)).toHaveLength(5);
  });

  it('renders \'No films found\' if no films have been found', () => {
    const wrapper = shallow(<SearchResults foundFilms={[]} />);
    expect(wrapper.find('p').text()).toMatch(/No films found/);
  })

  it('sorts films appropriately', () => {
    const wrapper = shallow(<SearchResults foundFilms={[]} />);
    expect(wrapper.instance()
      .sortFilms(mockState.foundFilms, mockState.sortParameter))
      .toEqual([
        { title: 'film1' },
        { title: 'film2' },
        { title: 'film3' },
        { title: 'film4' },
        { title: 'film5' },
      ]);
  });

  describe('mapStateToProps', () => {
    it('returns foundFilms as  a prop', () => {
      expect(mapStateToProps(mockState).foundFilms).toEqual([{title: 'film3'}, {title: 'film2'}, {title: 'film1'}, {title: 'film4'}, {title: 'film5'}]);
    })

    it('returns sortParameter as  a prop', () => {
      expect(mapStateToProps(mockState).sortParameter).toBe('title');
    });
  });

  describe('mapDispatchToProps', () => {
    it('', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).selectFilm();
      expect(dispatch.mock.calls[0][0].type).toBe('SELECT_FILM');
    })
  })
});
