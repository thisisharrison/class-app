import { connect } from 'react-redux';
import { fetchAllClassTimes } from '../../actions/classtime_action';
import { fetchClasses } from '../../actions/class/class_action';
import { toArray } from '../../reducers/selectors'
import Search from './search';

const mapStateToProps = ({entities}) => ({
  classes: toArray(entities.classes.all),
  classTimes: entities.classTimes.all,
})

const mapDispatchToProps = dispatch => ({
  fetchClasses: () => dispatch(fetchClasses()),
  fetchAllClassTimes: () => dispatch(fetchAllClassTimes())
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);