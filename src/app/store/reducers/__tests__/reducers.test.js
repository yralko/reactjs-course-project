import reducers from '../reducers';
import * as actions from '../../actions';


describe('app reducer', () => {
  it('should handle UPDATE_QUERY_PARAMETER', () => {
    const updateQueryParameter = {
      type: actions.UPDATE_QUERY_PARAMETER,
      parameter: 'searchBy',
      value: 'title',
    }

    expect(reducers({}, updateQueryParameter)).toEqual({"query": {"searchBy": "title"}})
  })

  it('should handle RECEIVE_FILMS', () => {
    const receiveFilms = {
      type: actions.RECEIVE_FILMS,
      films: [{title: 'film1'}, {title: 'film2'}],
    }

    expect(reducers({}, receiveFilms)).toEqual( {"fetchedFilms": [{"title": "film1"}, {"title": "film2"}]})
  })

  it('should handle CHANGE_PAGINATION_INDEX', () => {
    const changePaginationIndex = {
      type: actions.CHANGE_PAGINATION_INDEX,
      index: 3,
    }

    expect(reducers({}, changePaginationIndex)).toEqual({"paginationIndex": 3})
  })


  it('should handle SELECT_FILM', () => {
    const selectFilm = {
      type: actions.SELECT_FILM,
      film: {title: 'film1'},
    }

    expect(reducers({}, selectFilm)).toEqual({"currentFilm": {"title": "film1"}})
  })

  it('should handle RETURN_TO_SEARCH', () => {
    const returnToSearch = {
      type: actions.RETURN_TO_SEARCH,
      currentFilm: null,
    }

    expect(reducers({}, returnToSearch)).toEqual({"currentFilm": null})
  })
})
