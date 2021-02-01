import { connect } from "react-redux";
import { createClassTime } from "../../actions/classtime_action";
import ClassTimeForm from './classtime_form'

const mapStateToProps = (state, ownProps) => ({
  classId: ownProps.classId,
  newClassTime: state.entities.classTimes.new
});

const mapDispatchToProps = dispatch => ({
  createClassTime: (id, data) => dispatch(createClassTime(id, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassTimeForm);