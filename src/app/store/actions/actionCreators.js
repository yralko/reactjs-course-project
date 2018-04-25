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

export const searchFilms = (foundFilms) => {
  return {
    type: actionTypes.SEARCH_FILMS,
    foundFilms,
  };
};

export const returnToSearchbox = () => {
  return {
    type: actionTypes.RETURN_TO_SEARCHBOX,
  };
};

export const sortFilms = (sortParameter) => {
  return {
    type: actionTypes.SORT_FILMS,
    sortParameter,
  };
};
