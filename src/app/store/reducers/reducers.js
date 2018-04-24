import * as actionTypes from '../actions/actionTypes';

const initialState = {
  query: null,
  searchFilter: null,
  fetchedFilms: [],
  foundFilms: [],
  filmSelected: false,
  selectedFilmId: '',
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
    selectedFilmId: action.filmId,
    filmSelected: true,
  };
};

export const searchFilms = (state, action) => {
  return {
    ...state,
    foundFilms: action.foundFilms,
  };
};

const returnToSearchbox = (state, action) => {
  return {
    ...state,
    filmSelected: false,
  }
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EXEC_SEARCH: return execSearch(state, action);
    case actionTypes.CHANGE_FILTER: return changeFilter(state, action);
    case actionTypes.STORE_FETCHED_FILMS: return storeFetchedFilms(state, action);
    case actionTypes.SELECT_FILM: return selectFilm(state, action);
    case actionTypes.SEARCH_FILMS: return searchFilms(state, action);
    case actionTypes.RETURN_TO_SEARCHBOX: return returnToSearchbox(state, action);
    default: return state;
  }
};

export default reducers;
