import { DATA_LOADED } from "../constants/action-types.js";

const initialState = {
  pokemons: []
};

function rootReducer(state = initialState, action) {
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
        pokemons: state.pokemons.concat(action.payload)
      });
    }
  return state;
}

export default rootReducer;