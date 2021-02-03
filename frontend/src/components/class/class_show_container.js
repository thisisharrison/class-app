import { connect } from 'react-redux';
import { fetchClassTimes } from "../../actions/classtime_action";
import { fetchClass } from '../../actions/class/class_action';
import { selectClass, selectClassTimes } from '../../reducers/selectors'
import ClassShow from './class_show';

const mapStateToProps = (state, ownProps) => ({
  classId: ownProps.match.params.id,
  _class: selectClass(state, ownProps.match.params.id),
  classTimes: selectClassTimes(state, ownProps.match.params.id),
  isAdmin: state.session.isAdmin,
})

const mapDispatchToProps = dispatch => ({
  fetchClass: id => dispatch(fetchClass(id)),
  fetchClassTimes: id => dispatch(fetchClassTimes(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassShow)