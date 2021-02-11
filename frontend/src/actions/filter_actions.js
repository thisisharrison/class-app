import { fetchClasses } from './class/class_action'
export const UPDATE_FILTERS = 'UPDATE_FILTERS'

// filter can be tags, languages, timestamp
export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTERS,
  filter,
  value
})

// after we dispatch changeFilter
// state will have our filter object
// we will use the object to build req.query
export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchClasses(getState().ui.filters)(dispatch)
}