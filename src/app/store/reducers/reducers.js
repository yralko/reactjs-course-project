import * as actions from '../actions';

const initialState = {
  searchParams: '',
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH_PARAMS: return
    default: return state;
  }
};

export default reducers;
