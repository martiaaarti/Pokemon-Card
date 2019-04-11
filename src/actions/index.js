import { FETCH_DATA_BEGIN } from "../constants/action-types.js";
import { FETCH_DATA_SUCCESS } from "../constants/action-types.js";
import { FETCH_DATA_FAILURE } from '../constants/action-types.js';

export const getData = () => dispatch => {
  dispatch({type: FETCH_DATA_BEGIN});
  return fetch('http://localhost:3000/pokemon?_page=currentPageNumber&_limit=12')
    .then(response => response.json())
    .then(json => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: json });
    })
    .catch(error => dispatch({type: FETCH_DATA_FAILURE, payload: error}));
};
