import { connect } from "react-redux";
import { createClass, updateClass } from "../../actions/class/class_action";
import ClassForm from './class_form'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.user,
  newClass: state.entities.classes.new,
  isNew: ownProps.isNew, 
  _class: ownProps._class
});

const mapDispatchToProps = dispatch => ({
  createClass: data => dispatch(createClass(data)),
  updateClass: (id, data) => dispatch(updateClass(id, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassForm);