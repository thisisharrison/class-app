import { fetchClasses } from './class/class_action'
export const UPDATE_FILTERS = 'UPDATE_FILTERS'
export const UPDATE_FILTERS_QUERY_PARAMS = 'UPDATE_FILTERS_QUERY_PARAMS'

export const changeFilter = (filters) => ({
  type: UPDATE_FILTERS,
  filters
})

export const changeFilterParams = () => ({
  type: UPDATE_FILTERS_QUERY_PARAMS
})

export const updateFilter = filters => dispatch => (
  dispatch(changeFilter(filters))
)

export const updateFilterParams = () => (dispatch, getState) => {
  dispatch(changeFilterParams());
  return fetchClasses(getState().ui.filters.queryParams)(dispatch)
}