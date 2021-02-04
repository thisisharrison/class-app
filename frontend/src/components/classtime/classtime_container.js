import { connect } from "react-redux"
import { fetchClassTimes, destroyClassTime, updateClassTime } from "../../actions/classtime_action";
import ClassTimeIndex from './classtime_index'

const mapStateToProps = (state, ownProps) => ({
  classId: ownProps.classId.id,
  classTimes: state.entities.classTimes.all,
  classTimes: ownProps.classTimes
})

const mapDispatchToProps = dispatch => ({
  fetchClassTimes: id => dispatch(fetchClassTimes(id)),
  destroyClassTime: id => dispatch(destroyClassTime(id)),
  updateClassTime: (id, data) => dispatch(updateClassTime(id, data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassTimeIndex)