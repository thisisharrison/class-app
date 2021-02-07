import { connect } from "react-redux"
import { getSaves, getBookings, toArray } from '../../reducers/selectors'
import { destroyBooking, destroySave, newBooking, newSave, fetchSaves } from '../../actions/dashboard_actions';
import ClassIndex from './class_index'

const mapStateToProps = (state) => ({
  userSaves: getSaves(state),
  userBookings: getBookings(state),
  classes: toArray(state.entities.classes.all),
  classTimes: state.entities.classTimes.all,
  
})
const mapDispatchToProps = dispatch => ({
  // newBooking: (classTimeId) => dispatch(newBooking(classTimeId)),
  // destroyBooking: (classTimeId) => dispatch(destroyBooking(classTimeId)),
})

export default connect(mapStateToProps, null)(ClassIndex);