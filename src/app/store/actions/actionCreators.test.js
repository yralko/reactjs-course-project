import { shallow } from 'enzyme';
import * as actions from './actionCreators';
import * as actionTypes from './actionTypes';


describe('action creators', () =>  {
  it('returns execSearch action', () => {
    expect(actions.execSearch('test')).toEqual({
      type: actionTypes.EXEC_SEARCH,
      query: 'test',
    });
  });

  it('returns changeFilter action', () => {
    expect(actions.changeFilter('test')).toEqual({
      type: actionTypes.CHANGE_FILTER,
      filter: 'test',
    });
  });

  it('returns storeFetchedFilms action', () => {
    expect(actions.storeFetchedFilms('test')).toEqual({
      type: actionTypes.STORE_FETCHED_FILMS,
      allFilms: 'test',
    });
  });

  it('returns selectFilm action', () => {
    expect(actions.selectFilm('test')).toEqual({
      type: actionTypes.SELECT_FILM,
      filmId: 'test',
    });
  });

  it('returns searchFilms action', () => {
    expect(actions.searchFilms('test')).toEqual({
      type: actionTypes.SEARCH_FILMS,
      foundFilms: 'test',
    });
  });

  it('returns returnToSearchbox action', () => {
    expect(actions.returnToSearchbox()).toEqual({
      type: actionTypes.RETURN_TO_SEARCHBOX,
    });
  });

  it('returns sortFilms action', () => {
    expect(actions.sortFilms('test')).toEqual({
      type: actionTypes.SORT_FILMS,
      sortParameter: 'test',
    });
  });
})
