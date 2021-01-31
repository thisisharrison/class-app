import { connect } from "react-redux";
import { createClass } from "../../actions/class/class_action";
import ClassForm from './class_form'

const mapStateToProps = state => ({
  currentUser: state.session.user,
  newClass: state.entities.classes.new
});

const mapDispatchToProps = dispatch => ({
  createClass: data => dispatch(createClass(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassForm);