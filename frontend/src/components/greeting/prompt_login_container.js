import { connect } from "react-redux"
import { closeLoginPrompt } from "../../actions/greeting_actions";
import PromptLogin from './prompt_login'

const mapStateToProps = state => ({
  promptLogin: state.ui.greetings.promptLogin
})

const mapDispatchToProps = dispatch => ({
  closeLoginPrompt: () => dispatch(closeLoginPrompt())
})

export default connect(mapStateToProps, mapDispatchToProps)(PromptLogin);