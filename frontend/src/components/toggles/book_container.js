import { connect } from 'react-redux';
import { destroyBooking, newBooking } from '../../actions/dashboard_actions';
import { promptLogin } from '../../actions/greeting_actions';
import { isBooked } from '../../reducers/selectors'
import BookToggle from './book_toggle'

const mapStateToProps = (state, ownProps) => ({
  booked: isBooked(ownProps.classTimeId, state),
  classTimeId: ownProps.classTimeId,
  isAuthenticated: state.session.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  newBooking: (classTimeId) => dispatch(newBooking(classTimeId)),
  destroyBooking: (classTimeId) => dispatch(destroyBooking(classTimeId)),
  promptLogin: () => dispatch(promptLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(BookToggle)