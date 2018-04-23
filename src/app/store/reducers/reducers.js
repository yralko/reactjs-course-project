import * as actionTypes from '../actions/actionTypes';

const initialState = {
  query: null,
  searchFilter: null,
  fetchedFilms: [],
  selectedFilm: 412302,
};

const execSearch = (state, action) => {
  return {
    ...state,
    query: action.query,
  };
};

const changeFilter = (state, action) => {
  return {
    ...state,
    searchFilter: action.filter,
  };
};

const storeFetchedFilms = (state, action) => {
  return {
    ...state,
    fetchedFilms: action.allFilms,
  };
};

const selectFilm = (state, action) => {
  return {
    ...state,
    selectedFilm: action.filmId,
  };
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EXEC_SEARCH: return execSearch(state, action);
    case actionTypes.CHANGE_FILTER: return changeFilter(state, action);
    case actionTypes.STORE_FETCHED_FILMS: return storeFetchedFilms(state, action);
    case actionTypes.SELECT_FILM: return selectFilm(state, action);
    default: return state;
  }
};

export default reducers;
