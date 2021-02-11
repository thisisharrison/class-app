import { UPDATE_FILTERS } from '../actions/filter_actions';

const initialState = {
  tags: [],
  languages: [],
  unix: 0
}

// unix to startTime endTime

const filterReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case UPDATE_FILTERS:
      // return Object.assign({}, state, { [action.filter]: action.value });
      newState[action.filter] = [...newState[action.filter], action.value]
      return newState;
    default:
      return state;
  }
}

export default filterReducer;