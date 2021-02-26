import { getAdminClasses } from '../util/class/class_api_util';
import {
  getBookings,
  createBooking,
  deleteBooking,
  getSaves,
  createSave,
  deleteSave
} from '../util/dashboard_api_util';
import { receiveErrors } from './session/session_actions';
import { startLoadingAllClasses } from './class/class_action'
import { receiveUpdateClassTime } from './classtime_action';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS'
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING'
export const REMOVE_BOOKING = 'REMOVE_BOOKING'
export const RECEIVE_SAVES = 'RECEIVE_SAVES'
export const RECEIVE_SAVE = 'RECEIVE_SAVE'
export const REMOVE_SAVE = 'REMOVE_SAVE'
export const RECEIVE_ADMIN_CLASSES = 'RECEIVE_ADMIN_CLASSES'

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
})

export const receiveBooking = classtime => ({
  type: RECEIVE_BOOKING,
  classtime
})

export const removeBooking = bookings => ({
  type: REMOVE_BOOKING,
  bookings
})

export const receiveSaves = saves => ({
  type: RECEIVE_SAVES,
  saves
})

export const receiveSave = saves => ({
  type: RECEIVE_SAVE,
  saves
})

export const removeSave = saves => ({
  type: REMOVE_SAVE,
  saves
})

export const receiveAdminClasses = classes => ({
  type: RECEIVE_ADMIN_CLASSES,
  classes
})

export const fetchBookings = () => dispatch => (
  getBookings().then(bookings => dispatch(receiveBookings(bookings)))
  .catch(err => dispatch(receiveErrors('unauthorized', err.response.data)))
)

export const newBooking = classTimeId => dispatch => {
  createBooking(classTimeId).then(classtime => {
    // dispatch(receiveBooking(classtime))
    dispatch(receiveUpdateClassTime(classtime))
  })
  .catch(err => dispatch(receiveErrors('unauthorized', err.response.data)))
}

export const destroyBooking = classTimeId => dispatch => (
  deleteBooking(classTimeId).then(classtime => {
    // dispatch(removeBooking(bookings))
    dispatch(receiveUpdateClassTime(classtime))
  })
  .catch(err => dispatch(receiveErrors('unauthorized', err.response.data)))
)

export const fetchSaves = () => dispatch => {
  dispatch(startLoadingAllClasses());
  return (
  getSaves().then(saves => dispatch(receiveSaves(saves)))
  .catch(err => dispatch(receiveErrors('unauthorized', err.response.data)))
)};

export const newSave = classId => dispatch => (
  createSave(classId).then(saves => dispatch(receiveSave(saves)))
  .catch(err => dispatch(receiveErrors('unauthorized', err.response.data)))
)

export const destroySave = classId => dispatch => (
  deleteSave(classId).then(saves => dispatch(removeSave(saves)))
  .catch(err => dispatch(receiveErrors('unauthorized', err.response.data)))
)

export const fetchAdminClasses = () => dispatch => {
  dispatch(startLoadingAllClasses());
  return (
  getAdminClasses().then(classes => dispatch(receiveAdminClasses(classes)))
  .catch(err => dispatch(receiveErrors('unauthorized', err.response.data)))
)};