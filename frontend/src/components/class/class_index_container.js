import { connect } from "react-redux"
import { toArray } from '../../reducers/selectors'
import ClassIndex from './class_index'

const mapStateToProps = (state) => ({
  classes: toArray(state.entities.classes.all),  
})

export default connect(mapStateToProps, null)(ClassIndex);