import { connect } from "react-redux"
import Profile from './profile'
import { getUserBookings, getUserSaves } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  bookings: getUserBookings(state),
  saves: getUserSaves(state),
  currentUser: state.session.user
})

const mapDispatchToProps = dispatch => ({
  // remove saves
  // remove bookings
})

export default connect(mapStateToProps, null)(Profile)