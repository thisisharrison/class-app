import {
  RECEIVE_CLASSES,
  RECEIVE_NEW_CLASS,
  RECEVIE_CLASS,
} from '../../actions/class/class_action';

const _initialState = {
  all: {},
  new: undefined
}
export default function(state = {}, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_CLASSES:
      newState.all = action.classes.data;
      return newState;
    case RECEIVE_NEW_CLASS:
      newState.new = action._class.data;
      return newState;
    default: 
      return state;
  }
}