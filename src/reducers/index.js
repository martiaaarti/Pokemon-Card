import { FETCH_DATA_BEGIN } from '../constants/action-types.js';
import { FETCH_DATA_SUCCESS } from '../constants/action-types.js';
import { FETCH_DATA_FAILURE } from '../constants/action-types.js';

const initialState = {
  pokemons: [],
  loading: false, 
  error: null
};

function rootReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_DATA_BEGIN: {
      return Object.assign({}, state, {
        loading: true,
        error: null       
      })
    }

    case FETCH_DATA_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        pokemons: action.payload
      })
    }

    case FETCH_DATA_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.error
      })
    }

    default:
    return state;
  }
}

export default rootReducer;