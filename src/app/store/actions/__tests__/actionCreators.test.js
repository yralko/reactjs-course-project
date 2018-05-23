import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Action Creators', () => {
  it('updateQueryParameter', () => {
    expect(actions.updateQueryParameter(1, 2)).toEqual({ parameter: 1, type: 'UPDATE_QUERY_PARAMETER', value: 2 });
  });

  it('changePaginationIndex', () => {
    expect(actions.changePaginationIndex(123)).toEqual({ index: 123, type: 'CHANGE_PAGINATION_INDEX' });
  });

  it('receiveFilms', () => {
    expect(actions.receiveFilms([{ title: 'film1' }])).toEqual({ films: [{ title: 'film1' }], type: 'RECEIVE_FILMS' });
  });

  it('resetPagination', () => {
    const store = mockStore({});
    actions.resetPagination(store.dispatch);
    const expectedActionTypes = [
      { type: 'UPDATE_QUERY_PARAMETER', parameter: 'offset', value: 0 },
      { type: 'CHANGE_PAGINATION_INDEX', index: 0 },
    ];

    expect(store.getActions()).toEqual(expectedActionTypes);
  });

  it('requestFilms', () => {
    const store = mockStore({});


    actions.requestFilms({ param: 'offset', value: 2 })(store.dispatch);
    console.log(store.getActions());
  });
});

// receiveFilms
// resetPagination
// requestFilms
