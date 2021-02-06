import { connect } from 'react-redux';
import { destroyBooking, destroySave, newBooking, newSave, fetchSaves } from '../../actions/dashboard_actions';
import BookToggle from './book_toggle'

const mapStateToProps = (state, ownProps) => ({
  booked: ownProps.booked,
  classTimeId: ownProps.classTimeId
})

const mapDispatchToProps = dispatch => ({
  newBooking: (classTimeId) => dispatch(newBooking(classTimeId)),
  destroyBooking: (classTimeId) => dispatch(destroyBooking(classTimeId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookToggle)