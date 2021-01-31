import { connect } from "react-redux"
import { login } from "../../actions/session/session_actions"
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'Log In'
})

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);