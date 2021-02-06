import ClassContainer from '../class/class_container';
import ClassIndex from '../class/class_index';
import FilterForm from './filter_form'

const Search = ({classes, fetchClasses, fetchAllClassTimes}) => (
  <div>
    <FilterForm 
      fetchClasses={fetchClasses}
      fetchAllClassTimes={fetchAllClassTimes}
    />
    <ClassIndex 
      classes={classes}
    />
  </div>
)

export default Search;