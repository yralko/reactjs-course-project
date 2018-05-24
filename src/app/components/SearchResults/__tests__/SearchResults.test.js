import React from 'react';
import { shallow } from 'enzyme';
import { SearchResults, mapStateToProps, mapDispatchToProps } from '../SearchResults';
import SearchResult from '../SearchResult';

describe('<SearchResults />', () => {
  let wrapper;
  const mockState = {
    fetchedFilms: {
      data: [{ title: 'film1', id: 12 }, { title: 'film2', id: 15 }],
    },
  }

  describe('<SearchResults /> with fetchedFilms', () => {
    beforeEach(() => {
      wrapper = shallow(<SearchResults fetchedFilms={mockState.fetchedFilms.data} />);
    })

    it('renders SearchResult components', () => {
      expect(wrapper.find(SearchResult).exists()).toBeTruthy();
    })

    it('renders 2 films', () => {
      expect(wrapper.find(SearchResult)).toHaveLength(2);
    })
  })

  describe('<SearchResults /> with fetchedFilms', () => {
    beforeEach(() => {
      wrapper = shallow(<SearchResults />);
    })

    it('has a paragraph with "No films found" message', () => {
      expect(wrapper.find('p').text()).toBe('No films found');
    })
  })

  describe('redux-related funcitons', () => {
    it('returns fetched films', () => {
      expect(mapStateToProps(mockState).fetchedFilms).toEqual([{ title: 'film1', id: 12 }, { title: 'film2', id: 15 }]);
    })

    it('returns action of a proper type', () => {
      const mockFn = jest.fn();
      mapDispatchToProps(mockFn).selectFilm();
      expect(mockFn.mock.calls[0][0].type).toBe('SELECT_FILM')
    })
  })
})
