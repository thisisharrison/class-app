import ClassContainer from '../class/class_container';
import ClassIndex from '../class/class_index';

const Search = ({classes, fetchClasses, fetchAllClassTimes}) => (
  <div>
    <h2>FilterForm</h2>
    <ClassContainer />
    {/* <ClassIndex 
      classes={classes}
      fetchClasses={fetchClasses}
      fetchAllClassTimes={fetchAllClassTimes} */}
    {/* /> */}
  </div>
)

export default Search;