import { connect } from "react-redux"
import { fetchClassTimes, destroyClassTime, editClassTime } from "../../actions/classtime_action";
import { selectClass, selectClassTimes } from '../../reducers/selectors'
import ClassTimeIndex from './classtime_index'

const mapStateToProps = (state, ownProps) => ({
  classId: ownProps.classId,
  classTimes: selectClassTimes(state, ownProps.classId),
  isEdit: ownProps.isEdit,
  isAdmin: ownProps.isAdmin
})

const mapDispatchToProps = dispatch => ({
  fetchClassTimes: id => dispatch(fetchClassTimes(id)),
  destroyClassTime: id => dispatch(destroyClassTime(id)),
  editClassTime: classTime => dispatch(editClassTime(classTime))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassTimeIndex)