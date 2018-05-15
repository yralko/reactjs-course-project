import * as actionTypes from './actionTypes';
import axios from 'axios';

export const receiveFilms = (films) => {
  return {
    type: actionTypes.RECEIVE_FILMS,
    films,
  };
};

export const updateSearchParams = params => (dispatch) => {
  axios.get(`http://react-cdp-api.herokuapp.com/movies?${params}`)
    .then(res => dispatch(receiveFilms(res.data)));
};

export const changeSortingCriterion = (criterion) => {
  return {
    type: actionTypes.CHANGE_SORTING_CRITERION,
    criterion,
  };
};

export const changeSortOrder = (order) => {
  return {
    type: actionTypes.CHANGE_SORT_ORDER,
    order,
  };
};
