import * as actionTypes from '../actions/actionTypes';

const initialState = {
  query: null,
  searchFilter: null,
}

const execSearch = (state, action) => {
  return {
    query: action.query,
  }
}

const changeFilter = (state, action) => {
  return {
    filter: action.filter,
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
