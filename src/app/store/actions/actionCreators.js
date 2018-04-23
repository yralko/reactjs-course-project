import * as actionTypes from './actionTypes';

export const execSearch = (query) => {
  return {
    type: actionTypes.EXEC_SEARCH,
    query,
  };
};

export const changeFilter = (filter) => {
  return {
    type: actionTypes.CHANGE_FILTER,
    filter,
  };
};


export const storeFetchedFilms = (allFilms) => {
  return {
    type: actionTypes.STORE_FETCHED_FILMS,
    allFilms,
  };
};

export const selectFilm = (filmId) => {
  return {
    type: actionTypes.SELECT_FILM,
    filmId,
  };
};
