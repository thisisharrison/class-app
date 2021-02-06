import axios from 'axios';

export const getBookings = () => (
  axios.get('/api/bookings')
)

export const createBooking = classTimeId => (
  axios.post('/api/bookings', classTimeId)
)

export const deleteBooking = classTimeId => (
  axios.delete('/api/bookings', classTimeId)
)

export const getSaves = () => (
  axios.get('/api/saves')
)

export const createSave = classId => (
  axios.post('/api/saves', classId)
)

export const deleteSave = classId => (
  axios.delete('/api/saves', classId)
)

