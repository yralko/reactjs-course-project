import React from 'react';
import { shallow } from 'enzyme';
import { SearchResultsBar, mapStateToProps, mapDispatchToProps } from '../SearchResultsBar';

describe('<SearchResultsBar />', () => {
  const mockState = {
    foundFilms: [
      { title: 'film1' },
      { title: 'film2' },
      { title: 'film3' },
    ],
  };

  it('renders span', () => {
    const wrapper = shallow(<SearchResultsBar foundFilms={mockState.foundFilms} />);
    expect(wrapper.contains(<span>3 films found</span>)).toBe(true);
  });

  it('renders two buttons', () => {
    const wrapper = shallow(<SearchResultsBar foundFilms={mockState.foundFilms} />);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  describe('redux related functions', () => {
    it('returns foundFilms from the store', () => {
      expect(mapStateToProps(mockState).foundFilms)
        .toEqual([{ title: 'film1' }, { title: 'film2' }, { title: 'film3' }]);
    });

    it('sends an action of an appropriate type', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).sortFilms();
      expect(dispatch.mock.calls[0][0].type).toBe('SORT_FILMS');
    });
  });
});
