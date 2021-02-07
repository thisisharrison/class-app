import { connect } from 'react-redux';
import { fetchAllClassTimes } from '../../actions/classtime_action';
import { fetchClasses } from '../../actions/class/class_action';
import { getSaves, getBookings, toArray, getBookingsIds, getSavesIds } from '../../reducers/selectors'
import Search from './search';
import { destroyBooking, destroySave, newBooking, newSave, fetchSaves } from '../../actions/dashboard_actions';

// const mapStateToProps = state => ({
//   bookingsIds: getBookingsIds(state),
//   savesIds: getSavesIds(state),
// })

const mapDispatchToProps = dispatch => ({
  fetchClasses: () => dispatch(fetchClasses()),
  fetchAllClassTimes: () => dispatch(fetchAllClassTimes()),
  fetchSaves: () => dispatch(fetchSaves())
})

export default connect(null, mapDispatchToProps)(Search);