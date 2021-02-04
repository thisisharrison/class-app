import { connect } from 'react-redux';
import { destroyClassTime, fetchClassTimes, editClassTime } from "../../actions/classtime_action";
import { fetchClass } from '../../actions/class/class_action';
import { selectClass, selectClassTimes } from '../../reducers/selectors'
import ClassShow from './class_show';

const mapStateToProps = (state, ownProps) => ({
  classId: ownProps.match.params.id,
  _class: selectClass(state, ownProps.match.params.id),
  classTimes: selectClassTimes(state, ownProps.match.params.id),
  isAdmin: state.session.user.isAdmin,
  currentUserId: state.session.user.id
})

const mapDispatchToProps = dispatch => ({
  fetchClass: id => dispatch(fetchClass(id)),
  fetchClassTimes: id => dispatch(fetchClassTimes(id)),
  destroyClassTime: id => dispatch(destroyClassTime(id)),
  editClassTime: classTime => dispatch(editClassTime(classTime))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassShow)