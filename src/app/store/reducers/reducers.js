import * as actionTypes from '../actions/actionTypes';

const initialState = {
  searchParams: '',
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EXEC_SEARCH: return execSearch(state, action);
    default: return state;
  }
};

export default reducers;
