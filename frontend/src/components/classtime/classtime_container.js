import { connect } from "react-redux"
import { fetchClassTimes } from "../../actions/classtime_action";
import ClassTimeIndex from './classtime_index'

const mapStateToProps = (state, ownProps) => ({
  classId: ownProps.match.params.id,
  classTimes: state.entities.classTimes.all
})

const mapDispatchToProps = dispatch => ({
  fetchClassTimes: id => dispatch(fetchClassTimes(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassTimeIndex)