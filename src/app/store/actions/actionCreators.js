import axios from 'axios';
import * as actionTypes from './actionTypes';
import { concatQueryParams } from '../../../helper';
import store from '../store';

export const updateQueryParameter = (parameter, value) => {
  return {
    type: actionTypes.UPDATE_QUERY_PARAMETER,
    parameter,
    value,
  };
};

export const changePaginationIndex = (index) => {
  return {
    type: actionTypes.CHANGE_PAGINATION_INDEX,
    index,
  };
};

export const receiveFilms = (films) => {
  return {
    type: actionTypes.RECEIVE_FILMS,
    films,
  };
};

export const resetPagination = (dispatch) => {
  dispatch(updateQueryParameter('offset', 0));
  dispatch(changePaginationIndex(0));
};

export const requestFilms = updatedParam => (dispatch) => {
  if (updatedParam) {
    dispatch(updateQueryParameter(updatedParam.param, updatedParam.value));

    if (updatedParam.param !== 'offset') {
      resetPagination(dispatch);
    }
  } else {
    resetPagination(dispatch);
  }

  const params = concatQueryParams(store);


  axios.get(`http://react-cdp-api.herokuapp.com/movies?${params}`)
    .then(res => dispatch(receiveFilms(res.data)));
};

export const storeCurrentFilm = (film) => {
  return {
    type: actionTypes.STORE_CURRENT_FILM,
    film,
  };
};

export const getFilmById = id => (dispatch) => {
  axios.get(`http://react-cdp-api.herokuapp.com/movies/${id}`)
    .then(res => dispatch(storeCurrentFilm(res.data)));
};


export const returnToSearch = () => {
  return {
    type: actionTypes.RETURN_TO_SEARCH,
  };
};

export const toggleFilmSelection = (bool) => {
  return {
    type: actionTypes.TOGGLE_FILM_SELECTION,
    bool,
  };
};
