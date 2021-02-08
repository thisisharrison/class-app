import { connect } from 'react-redux';
import { destroyBooking, newBooking } from '../../actions/dashboard_actions';
import { isBooked } from '../../reducers/selectors'
import BookToggle from './book_toggle'

const mapStateToProps = (state, ownProps) => ({
  booked: isBooked(ownProps.classTimeId, state),
  classTimeId: ownProps.classTimeId
})

const mapDispatchToProps = dispatch => ({
  newBooking: (classTimeId) => dispatch(newBooking(classTimeId)),
  destroyBooking: (classTimeId) => dispatch(destroyBooking(classTimeId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookToggle)