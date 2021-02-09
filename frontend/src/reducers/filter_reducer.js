import { UPDATE_FILTERS } from '../actions/filter_actions';

const initialState = {
  tags: [],
  languages: [],
  unix: 0
}

const filterReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_FILTERS:
      return Object.assign({}, state, { [action.filter] : action.value } );
    default:
      return state;
  }
}

export default filterReducer;