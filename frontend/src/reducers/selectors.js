export const toArray = obj => (
  Object.keys(obj).map(key => obj[key])
)

// access from state or return empty object
export const selectClass = (classes, id ) => {
  return classes.all[id] || {tags: [], languages: []}
}

export const selectClassTimes = (classTimes, id) => {
  if (classTimes.all.length > 0) {
    return classTimes.all.filter(classtime => classtime.class === id)
  } else {
    return []
  }
}

export const getBookings = state => (
  state.entities.dashboard.bookings || []
) 

export const getSaves = state => (
  state.entities.dashboard.saves || []
) 