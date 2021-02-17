import { connect } from 'react-redux';
import { destroyBooking, destroySave, newBooking, newSave, fetchSaves } from '../../actions/dashboard_actions';
import { promptLogin } from '../../actions/greeting_actions';
import { isSaved } from '../../reducers/selectors'
import SaveToggle from './save_toggle'

const mapStateToProps = (state, ownProps) => ({
  // saved: ownProps.saved,
  saved: isSaved(ownProps.classId, state),
  classId: ownProps.classId,
  isAuthenticated: state.session.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  newSave: (classId) => dispatch(newSave(classId)),
  destroySave: (classId) => dispatch(destroySave(classId)),
  promptLogin: () => dispatch(promptLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(SaveToggle)