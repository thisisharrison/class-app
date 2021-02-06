import {
  getBookings,
  createBooking,
  deleteBooking,
  getSaves,
  createSave,
  deleteSave
} from '../util/dashboard_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS'
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING'
export const REMOVE_BOOKING = 'REMOVE_BOOKING'
export const RECEIVE_SAVES = 'RECEIVE_SAVES'
export const RECEIVE_SAVE = 'RECEIVE_SAVE'
export const REMOVE_SAVE = 'REMOVE_SAVE'

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
})

export const receiveBooking = bookings => ({
  type: RECEIVE_BOOKING,
  bookings
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

export const fetchBookings = () => dispatch => (
  getBookings().then(bookings => dispatch(receiveBookings(bookings)))
)

export const newBooking = classTimeId => dispatch => (
  createBooking(classTimeId).then(bookings => dispatch(receiveBooking(bookings)))
)

export const destroyBooking = classTimeId => dispatch => (
  deleteBooking(classTimeId).then(bookings => dispatch(removeBooking(bookings)))
)

export const fetchSaves = () => dispatch => (
  getSaves().then(saves => dispatch(receiveSaves(saves)))
)

export const newSave = classId => dispatch => (
  createSave(classId).then(saves => dispatch(receiveSave(saves)))
)

export const destroySave = classId => dispatch => (
  deleteSave(classId).then(saves => dispatch(removeSave(saves)))
)

