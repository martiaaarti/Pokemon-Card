import { DATA_LOADED } from "../constants/action-types.js";

export function getData() {
  return function (dispatch) {
    return fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json });
    })
    .catch(() => alert('Can not load data'));
  };
}