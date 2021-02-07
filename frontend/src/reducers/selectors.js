export const toArray = obj => (
  Object.keys(obj).map(key => obj[key])
)

// access from state or return empty object
export const selectClass = (classes, id ) => {
  return classes.all[id] || {tags: [], languages: []}
}

export const selectClassTimes = (classTimes, id) => {
  if (classTimes.all.length > 0) {
    return classTimes.all.filter(classtime => classtime._id === id)
  } else {
    return []
  }
}

export const getBookingsIds = ({ entities: { dashboard: { bookings } } }) => {
  if (bookings.length) {
    return []
  } else {
    return bookings.map(classTime => classTime._id)
  }
}

export const getSavesIds = ({ entities: { dashboard: { saves } } }) => {
  if (saves.length) {
    return []
  } else {
    return saves.map(_class => _class._id)
  }
}

export const getBookings = ({ entities: { dashboard: { bookings } } }) => {
  return bookings.length ? bookings : []
}

export const getSaves = ({ entities: { dashboard: { saves } } }) => {
  return saves.length ? saves : []
}