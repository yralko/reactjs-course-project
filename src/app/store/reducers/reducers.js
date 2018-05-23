import * as actionTypes from '../actions/actionTypes';

const initialState = {
  query: {
    search: '',
    searchBy: 'title',
    sortBy: 'release_date',
    sortOrder: 'desc',
    offset: 0,
  },
  fetchedFilms: {},
  filmIsSelected: false,
  paginationIndex: 0,
  currentFilm: null,
};

const updateQueryParameter = (state, action) => {
  return {
    ...state,
    query: {
      ...state.query,
      [action.parameter]: action.value,
    },
  };
};

const receiveFilms = (state, action) => {
  return {
    ...state,
    fetchedFilms: action.films,
  };
};

const changePaginationIndex = (state, action) => {
  return {
    ...state,
    paginationIndex: action.index,
  }
}

const returnToSearch = (state, action) => {
  return {
    ...state,
    currentFilm: null,
  };
};

const selectFilm = (state, action) => {
  return {
    ...state,
    currentFilm: action.film,
  };
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_QUERY_PARAMETER: return updateQueryParameter(state, action);
    case actionTypes.RECEIVE_FILMS: return receiveFilms(state, action);
    case actionTypes.RETURN_TO_SEARCHBOX: return returnToSearchbox(state, action);
    case actionTypes.CHANGE_PAGINATION_INDEX: return changePaginationIndex(state, action);
    case actionTypes.TOGGLE_FILM_SELECTION: return toggleFilmSelection(state, action);
    case actionTypes.SELECT_FILM: return selectFilm(state, action);
    case actionTypes.RETURN_TO_SEARCH: return returnToSearch(state, action);
    default: return state;
  }
};

export default reducers;
