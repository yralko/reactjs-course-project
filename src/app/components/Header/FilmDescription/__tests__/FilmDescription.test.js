import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { FilmDescription, mapStateToProps, mapDispatchToProps } from '../FilmDescription';
import CurrentFilm from '../CurrentFilm';

const initialStore = {
  fetchedFilms: [{ title: 'film1' }, { title: 'film2' }],
  CurrentFilm: { title: 'film1' },
};

describe('FilmDescription', () => {
  it('renders CurrentFilm component', () => {
    const wrapper = shallow(<FilmDescription />);
    expect(wrapper.find(CurrentFilm).exists()).toBe(true);
  });

  describe('mapStateToProps and mapDispatchToProps', () => {
    it('returns fetchedFilms', () => {
      expect(mapStateToProps(initialStore).fetchedFilms).toEqual([{ title: 'film1' }, { title: 'film2' }]);
    });

    it('returns RETURN_TO_SEARCH type', () => {
      const mockDispatch = jest.fn();

      mapDispatchToProps(mockDispatch).returnToSearch();
      expect(mockDispatch.mock.calls[0][0].type).toBe('RETURN_TO_SEARCH');
    });
  });
});
