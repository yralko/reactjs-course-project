import * as actionTypes from '../actions/actionTypes';

const initialState = {
  query: null,
  searchFilter: null,
  searchResults: [],
}

const execSearch = (state, action) => {
  return {
    ...state,
    query: action.query,
  }
}

const changeFilter = (state, action) => {
  return {
    ...state,
    searchFilter: action.filter,
  }
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EXEC_SEARCH: return execSearch(state, action);
    case actionTypes.CHANGE_FILTER: return changeFilter(state, action);
    default: return state;
  }
}

export default reducers;
