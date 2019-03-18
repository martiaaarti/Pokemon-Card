import { FETCH_DATA_SUCCESS } from "../constants/action-types.js";

export function getData() {
  return function (dispatch) {
    return fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: json });
    })
    .catch(() => alert('Can not load data'));
  };
}