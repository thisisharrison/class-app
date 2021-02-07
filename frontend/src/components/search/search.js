import ClassIndexContainer from '../class/class_index_container';
import FilterForm from './filter_form'

const Search = ({
  // classes, 
  fetchSaves,
  fetchClasses, 
  fetchAllClassTimes,
  }) => (
  <div>
    <FilterForm 
      fetchClasses={fetchClasses}
      fetchAllClassTimes={fetchAllClassTimes}
      fetchSaves={fetchSaves}
    />
    <ClassIndexContainer />
    
    
    <h3>Class Time Index Modal = carries Booking actions</h3>
  </div>
)

export default Search;