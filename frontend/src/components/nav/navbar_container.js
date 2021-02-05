import { connect } from 'react-redux';
import { logout } from '../../actions/session/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  isAdmin: state.session.user.isAdmin
});

export default connect(mapStateToProps, { logout })(NavBar);