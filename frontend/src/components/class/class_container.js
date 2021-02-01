import { connect } from "react-redux"
import { fetchClasses } from '../../actions/class/class_action';
import ClassIndex from './class_index'

const mapStateToProps = ({entities: {classes}}) => ({
  classes: classes.all
})
const mapDispatchToProps = dispatch => ({
  fetchClasses: () => dispatch(fetchClasses())
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassIndex);