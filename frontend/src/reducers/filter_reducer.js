import { UPDATE_FILTERS, UPDATE_FILTERS_QUERY_PARAMS } from '../actions/filter_actions';

const initialState = {
  options: {},
  queryParams: '?'
}


const filterReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case UPDATE_FILTERS:
      newState.options = action.filters;
      return newState;

    case UPDATE_FILTERS_QUERY_PARAMS:
      newState.queryParams = '?' + Object.keys(newState.options).map(filter =>
        newState.options[filter].reduce((acc, cur) => {
          return acc += `${filter}=${cur.toString().split(' ').join('+')}&`
        }, '')).join('')
      return newState;

    default:
      return state;
  }
}

export default filterReducer;