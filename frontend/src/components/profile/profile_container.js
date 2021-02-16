import { connect } from "react-redux"
import Profile from './profile'
import { getBookings, getBookingsIds, getSaveIds, getSaves, getAdminClasses } from '../../reducers/selectors';
import { destroyBooking, destroySave, fetchAdminClasses, fetchBookings, fetchSaves, newBooking, newSave } from "../../actions/dashboard_actions";

const mapStateToProps = (state) => ({
  bookings: getBookings(state),
  saves: getSaves(state),
  currentUser: state.session.user,
  classes: getAdminClasses(state)
})

const mapDispatchToProps = dispatch => ({
  fetchBookings: () => dispatch(fetchBookings()),
  fetchSaves: () => dispatch(fetchSaves()),
  fetchAdminClasses: () => dispatch(fetchAdminClasses())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)