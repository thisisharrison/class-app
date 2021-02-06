import { connect } from "react-redux"
import { fetchClassTimes, destroyClassTime, editClassTime } from "../../actions/classtime_action";
import { selectClass, selectClassTimes } from '../../reducers/selectors'
import ClassTimeIndex from './classtime_index'

const mapStateToProps = (state, ownProps) => ({
  classTimes: ownProps.classTimes,
  classId: ownProps.classId,
  isEdit: ownProps.isEdit,
  isClassOwner: ownProps.isClassOwner
})

const mapDispatchToProps = dispatch => ({
  fetchClassTimes: id => dispatch(fetchClassTimes(id)),
  destroyClassTime: id => dispatch(destroyClassTime(id)),
  editClassTime: classTime => dispatch(editClassTime(classTime))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassTimeIndex)