import { connect } from "react-redux"
import { fetchClasses } from '../../actions/class/class_action';
import { toArray } from '../../reducers/selectors'
import ClassIndex from './class_index'

const mapStateToProps = ({entities: {classes}}) => ({
  classes: toArray(classes.all)
})
const mapDispatchToProps = dispatch => ({
  fetchClasses: () => dispatch(fetchClasses())
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassIndex);