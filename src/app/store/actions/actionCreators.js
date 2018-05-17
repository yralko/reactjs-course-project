import axios from 'axios';
import * as actionTypes from './actionTypes';

export const updateQueryParameter = (parameter, value) => {
  return {
    type: actionTypes.UPDATE_QUERY_PARAMETER,
    parameter,
    value,
  };
};

export const receiveFilms = (films) => {
  return {
    type: actionTypes.RECEIVE_FILMS,
    films,
  };
};

export const requestFilms = (query, updatedParam) => (dispatch) => {
  if (updatedParam) dispatch(updateQueryParameter(updatedParam.param, updatedParam.value));

  const params = Object.entries(query)
    .map(v => `${v[0]}=${v[1]}`)
    .join('&');

  axios.get(`http://react-cdp-api.herokuapp.com/movies?${params}`)
    .then(res => dispatch(receiveFilms(res.data)));
};

export const returnToSearch = () => {
  return {
    type: actionTypes.RETURN_TO_SEARCHBOX,
  };
};
