import { connect } from "react-redux";
import { createClassTime, editClassTime, updateClassTime } from "../../actions/classtime_action";
import ClassTimeForm from './classtime_form'

const mapStateToProps = (state, ownProps) => ({
  classId: ownProps.classId,
  newClassTime: state.entities.classTimes.new,
  errors: state.errors.classtimes
});

const mapDispatchToProps = dispatch => ({
  createClassTime: (id, data) => dispatch(createClassTime(id, data)),
  updateClassTime: (id, data) => dispatch(updateClassTime(id, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassTimeForm);