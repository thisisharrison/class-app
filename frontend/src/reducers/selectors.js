export const getClassArray = obj => (
  Object.keys(obj).map(key => obj[key])
)

export const getUserBookings = state => (
  state.session.user.bookings || []
) 

export const getUserSaves = state => (
  state.session.user.saves || []
) 