import ClassIndexContainer from '../class/class_index_container';
import FilterForm from './filter_form'

const Search = ({
  // classes, 
  filters,
  updateFilter,
  fetchSaves,
  fetchClasses, 
  fetchAllClassTimes,
  }) => (
  <div>
    <FilterForm 
      filters={filters}
      updateFilter={updateFilter}
      fetchClasses={fetchClasses}
      fetchAllClassTimes={fetchAllClassTimes}
      fetchSaves={fetchSaves}
    />
    <ClassIndexContainer />
    
    
    <h3>Class Time Index Modal = carries Booking actions</h3>
  </div>
)

export default Search;