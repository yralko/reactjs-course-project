import React from 'react';
import { shallow } from 'enzyme';
import { CurrentFilm, mapStateToProps } from './CurrentFilm';
import FilmData from '../FilmData';
import FilmPoster from '../FilmPoster';

describe('<CurrentFilm />', () => {
  let wrapper;
  const mockInitialState = {
    fetchedFilms: [{ title: 'mock film1', year: 2015 }, { title: 'mock film2', year: 2017 }],
    selectedFilmId: 123,
  }

  beforeEach(() => {
    wrapper = shallow(<CurrentFilm fetchedFilms={mockInitialState.fetchedFilms } />);
  });

  it('renders FilmData', () => {
    expect(wrapper.find(FilmData).exists()).toBe(true);
  });

  it('renders FilmPoster', () => {
    expect(wrapper.find(FilmPoster).exists()).toBe(true);
  });

  describe('mapStateToProps', () => {
    it('returns selectedFilmId', () => {
      expect(mapStateToProps(mockInitialState).fetchedFilms).toEqual([{ title: 'mock film1', year: 2015 }, { title: 'mock film2', year: 2017 }]);
    });

    it('returns fetchedFilms', () => {
      expect(mapStateToProps(mockInitialState).selectedFilmId).toBe(123);
    });
  })
});
