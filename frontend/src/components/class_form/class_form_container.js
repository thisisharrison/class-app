import { connect } from "react-redux";
import { createClass, destroyClass, updateClass } from "../../actions/class/class_action";
import ClassForm from './class_form'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.user,
  newClass: state.entities.classes.new,
  _class: ownProps._class,
  isNew: ownProps.isNew
});

const mapDispatchToProps = dispatch => ({
  createClass: data => dispatch(createClass(data)),
  updateClass: (id, data) => dispatch(updateClass(id, data)),
  destroyClass: id => dispatch(destroyClass(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassForm);