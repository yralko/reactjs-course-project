import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps } from '../Header';
import Searchbox from '../Searchbox';
import FilmDescription from '../FilmDescription';
import SearchResultsBar from '../SearchResultsBar';

describe('<Header />', () => {
  it('renders FilmDescription component', () => {
    const wrapper = shallow(<Header currentFilm />);
    expect(wrapper.find(FilmDescription).exists()).toBe(true);
  });

  it('renders Searchbox component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Searchbox).exists()).toBe(true);
  });

  it('renders SearchResultsBar component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(SearchResultsBar).exists()).toBe(true);
  });

  describe('mapStateToProps', () => {
    const mockStore = {
      currentFilm: { title: 'film1', year: 2015 },
    };

    it('returns currentFilm', () => {
      expect(mapStateToProps(mockStore).currentFilm).toEqual({ title: 'film1', year: 2015 });
    });
  });
});
