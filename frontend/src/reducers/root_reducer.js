import { combineReducers } from 'redux';
import session from './session/session_api_reducer';
import errors from './errors_reducer';
import entities from './entities_reducer'
import ui from './ui_reducer'

const RootReducer = combineReducers({
  session,
  entities,
  errors,
  ui
})

export default RootReducer;