import { connect } from 'react-redux';
import { destroyClassTime, fetchClassTimes, editClassTime } from "../../actions/classtime_action";
import { fetchClass } from '../../actions/class/class_action';
import { selectClass, selectClassTimes, currentUserId } from '../../reducers/selectors'
import ClassShow from './class_show';

const mapStateToProps = (state, ownProps) => ({
  classId: ownProps.match.params.id,
  _class: selectClass(state.entities.classes, ownProps.match.params.id),
  isAdmin: state.session.isAdmin,
  currentUserId: currentUserId(state.session)
})

const mapDispatchToProps = dispatch => ({
  fetchClass: id => dispatch(fetchClass(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassShow)