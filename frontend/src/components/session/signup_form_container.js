import { connect } from "react-redux"
import { signup, login } from "../../actions/session/session_actions"
import SessionForm from './session_form';

const mapStateToProps = state => ({
  isSignedIn: state.session.isSignedIn,
  errors: state.errors.session,
  formType: 'Sign Up'
})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);