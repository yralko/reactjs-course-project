import axios from 'axios';
import * as actionTypes from './actionTypes';

export const receiveFilms = (films) => {
  return {
    type: actionTypes.RECEIVE_FILMS,
    films,
  };
};

export const requestFilms = params => (dispatch) => {
  axios.get(`http://react-cdp-api.herokuapp.com/movies?${params}`)
    .then(res => dispatch(receiveFilms(res.data)));
};

export const updateSearchParams = (params) => {
  return {
    type: actionTypes.UPDATE_SEARCH_PARAMS,
    params,
  };
};
