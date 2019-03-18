import { FETCH_DATA_SUCCESS } from "../constants/action-types.js";

const initialState = {
  pokemons: []
};

function rootReducer(state = initialState, action) {
  if (action.type === FETCH_DATA_SUCCESS) {
    return Object.assign({}, state, {
        pokemons: state.pokemons.concat(action.payload)
      });
    }
  return state;
}

export default rootReducer;