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
  filmSelected: false,
  paginationIndex: 0,
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

const returnToSearchbox = (state, action) => {
  return {
    ...state,
    filmSelected: false,
  };
};

const changePaginationIndex = (state, action) => {
  return {
    ...state,
    paginationIndex: action.index,
  }
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_QUERY_PARAMETER: return updateQueryParameter(state, action);
    case actionTypes.RECEIVE_FILMS: return receiveFilms(state, action);
    case actionTypes.RETURN_TO_SEARCHBOX: return returnToSearchbox(state, action);
    case actionTypes.CHANGE_PAGINATION_INDEX: return changePaginationIndex(state, action);
    default: return state;
  }
};

export default reducers;
