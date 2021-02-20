import { connect } from 'react-redux';
import { fetchAllClassTimes } from '../../actions/classtime_action';
import { fetchClasses } from '../../actions/class/class_action';
import { getSaves, getBookings, toArray, getBookingsIds, getSavesIds } from '../../reducers/selectors'
import Search from './search';
import { destroyBooking, destroySave, newBooking, newSave, fetchSaves, fetchBookings } from '../../actions/dashboard_actions';
import { updateFilter, updateFilterParams } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  // classes: toArray(state.entities.classes.all),  
  filters: state.ui.filters,
  isAuthenticated: state.session.isAuthenticated,
  bookings: getBookingsIds(state),
  saves: getSavesIds(state),
})

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateFilterParams: () => dispatch(updateFilterParams()),
  fetchClasses: (data) => dispatch(fetchClasses(data)),
  fetchAllClassTimes: () => dispatch(fetchAllClassTimes()),
  fetchSaves: () => dispatch(fetchSaves()),
  fetchBookings: () => dispatch(fetchBookings())
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);