import { UPDATE_FILTERS } from '../actions/filter_actions';

const initialState = {
  tags: [],
  languages: [],
  timestamp: 0
}

const filterReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.types) {
    case UPDATE_FILTERS:
      return Object.assign({}, state, { [action.filter] : action.value })
    default:
      return state;
  }
}

export default filterReducer;