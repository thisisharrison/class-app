import { connect } from "react-redux"
import Profile from './profile'
import { getBookings, getSaves } from '../../reducers/selectors';
import { destroyBooking, destroySave, fetchBookings, fetchSaves, newBooking, newSave } from "../../actions/dashboard_actions";

const mapStateToProps = (state) => ({
  bookings: getBookings(state),
  saves: getSaves(state),
  currentUser: state.session.user
})

const mapDispatchToProps = dispatch => ({
  fetchBookings: () => dispatch(fetchBookings()),
  newBooking: (classTimeId) => dispatch(newBooking(classTimeId)),
  destroyBooking: (classTimeId) => dispatch(destroyBooking(classTimeId)),
  fetchSaves: () => dispatch(fetchSaves()),
  newSave: (classId) => dispatch(newSave(classId)),
  destroySave: (classId) => dispatch(destroySave(classId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)