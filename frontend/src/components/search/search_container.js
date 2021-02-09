import { connect } from 'react-redux';
import { fetchAllClassTimes } from '../../actions/classtime_action';
import { fetchClasses } from '../../actions/class/class_action';
import { getSaves, getBookings, toArray, getBookingsIds, getSavesIds } from '../../reducers/selectors'
import Search from './search';
import { destroyBooking, destroySave, newBooking, newSave, fetchSaves } from '../../actions/dashboard_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  // classes: toArray(state.entities.classes.all),  
  filters: state.ui.filters
  // bookingsIds: getBookingsIds(state),
  // savesIds: getSavesIds(state),
})

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchClasses: (data) => dispatch(fetchClasses(data)),
  fetchAllClassTimes: () => dispatch(fetchAllClassTimes()),
  fetchSaves: () => dispatch(fetchSaves())
})

export default connect(null, mapDispatchToProps)(Search);