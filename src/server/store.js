import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../app/store/reducers/reducers';

const store = () => {
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

  return createStore(reducers, initialState, applyMiddleware(thunk));
};

export default store;
