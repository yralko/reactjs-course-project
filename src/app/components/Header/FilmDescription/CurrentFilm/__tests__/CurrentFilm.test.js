import React from 'react';
import { shallow } from 'enzyme';
import { CurrentFilm, mapStateToProps } from '../CurrentFilm';
import FilmData from '../../FilmData';
import FilmPoster from '../../FilmPoster';

describe('<CurrentFilm />', () => {
  it('returns null', () => {
    const wrapper = shallow(<CurrentFilm />);
    expect(wrapper.children()).toHaveLength(0);
  });

  it('returns FilmData component', () => {
    const wrapper = shallow(<CurrentFilm currentFilm />);
    expect(wrapper.find(FilmData).exists()).toBe(true);
  });

  it('returns FilmPoster component', () => {
    const wrapper = shallow(<CurrentFilm currentFilm />);
    expect(wrapper.find(FilmPoster).exists()).toBe(true);
  });

  describe('mapStateToProps', () => {
    const mockStore = {
      currentFilm: { title: 'film1', year: 2009 },
    };

    it('returns currentFilm', () => {
      expect(mapStateToProps(mockStore).currentFilm).toEqual({ title: 'film1', year: 2009 });
    });
  });
});
