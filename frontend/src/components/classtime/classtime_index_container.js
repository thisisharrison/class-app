import { connect } from "react-redux"
import { fetchClassTimes, destroyClassTime, editClassTime } from "../../actions/classtime_action";
import { sortClassTimes } from "../../reducers/selectors";
import ClassTimeIndex from './classtime_index'

const mapStateToProps = (state, ownProps) => ({
  classId: ownProps.classId,
  classTimes: sortClassTimes(state.entities.classTimes.all),
  isEdit: ownProps.isEdit,
  isClassOwner: ownProps.isClassOwner,
  currentUser: state.session.user
})

const mapDispatchToProps = dispatch => ({
  fetchClassTimes: id => dispatch(fetchClassTimes(id)),
  destroyClassTime: id => dispatch(destroyClassTime(id)),
  editClassTime: classTime => dispatch(editClassTime(classTime))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassTimeIndex)