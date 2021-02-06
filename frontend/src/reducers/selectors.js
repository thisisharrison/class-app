export const getClassArray = obj => (
  Object.keys(obj).map(key => obj[key])
)

// access from state or return empty object
export const selectClass = ({ entities: { classes } }, id ) => {
  return classes.all[id] || {tags: [], languages: []}
}

export const selectClassTimes = ({entities}, id) => {
  return entities.classTimes.all || []
}

export const getBookings = state => (
  state.entities.dashboard.bookings || []
) 

export const getSaves = state => (
  state.entities.dashboard.saves || []
) 