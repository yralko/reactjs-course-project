import * as actionTypes from './actionTypes';

export const execSearch = (query) => {
  return {
    type: actionTypes.EXEC_SEARCH,
    query: query,
  }
}

export const changeFilter = (filter) => {
  return {
    type: actionTypes.CHANGE_FILTER,
    filter,
  }
}
