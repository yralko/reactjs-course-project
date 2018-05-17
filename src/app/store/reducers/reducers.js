import * as actionTypes from '../actions/actionTypes';

const initialState = {
  searchParams: '',
  sortParams: '',
  fetchedFilms: [],
  sortBy: 'title',
};

const receiveFilms = (state, action) => {
  return {
    ...state,
    fetchedFilms: action.films,
  };
};

const updateSearchParams = (state, action) => {
  return {
    ...state,
    searchParams: action.params,
  };
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_FILMS: return receiveFilms(state, action);
    case actionTypes.UPDATE_SEARCH_PARAMS: return updateSearchParams(state, action);
    case actionTypes.REQUEST_FILMS: return state;
    default: return state;
  }
};

export default reducers;
