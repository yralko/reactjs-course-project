import axios from 'axios';
import * as actionTypes from './actionTypes';
import { store } from '../../../index';

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

export const requestFilms = (updatedParam) => (dispatch) => {
  if (updatedParam) dispatch(updateQueryParameter(updatedParam.param, updatedParam.value));
  if (updatedParam.param !== 'offset') dispatch(updateQueryParameter('offset', 0));

  const params = Object.entries(store.getState().query)
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
