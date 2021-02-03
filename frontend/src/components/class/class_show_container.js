import { connect } from 'react-redux';
import { fetchClassTimes, updateClassTime } from "../../actions/classtime_action";
import { updateClass } from '../../actions/class/class_action';
import ClassShow from './class_show';

const mapStateToProps = (state, ownProps) => ({
  classId: ownProps.match.params.id,
  _class: state.entities.classes.all[ownProps.match.params.id],
  classTimes: state.entities.classTimes.all,
  isAdmin: state.session.isAdmin,
})

const mapDispatchToProps = dispatch => ({
  fetchClassTimes: id => dispatch(fetchClassTimes(id)),
  updateClass: (id, data) => dispatch(updateClass(id, data)),
  updateClassTime: (id, data) => dispatch(updateClassTime(id, data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassShow)