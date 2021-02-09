import React, { useEffect, useState } from "react"
import moment from 'moment';
import languages from 'languages';

const langscodes = languages.getAllLanguageCode()

const FilterForm = ({ updateFilter, filters, fetchClasses, fetchAllClassTimes, fetchSaves}) => {
  const [filter, setFilter] = useState({});
  
  useEffect(() => {
    if (Object.values(filters)[0]) {
      fetchClasses(filters)
    } else {
      fetchClasses({})
    }
  }, [])
  
  useEffect(() => {
    fetchSaves()
  }, [])
  
  // handle deselect and remove key from filter
  const handleChange = e => {
    const updatedField = { [e.target.name]: [e.target.value] };
    updateFilter(e.target.name, e.target.value)
    const editedFitler = Object.assign({}, filter, updatedField);
    setFilter(editedFitler);
  }

  const handleTimeChange = e => {
    const unixTime = moment(e.target.value).unix()
    const updatedField = { [e.target.name]: unixTime };
    updateFilter(e.target.name, e.target.value)
    const editedFitler = Object.assign({}, filter, updatedField);
    setFilter(editedFitler);
  }

  return (
    <div>
      <form>
        <label>Interests:</label>
        <input 
          name='tags' 
          value={filter.tags}
          placeholder='Yoga'
          onChange={handleChange}
        />
      
        <label>Languages:</label>
        <input 
          name='languages' 
          value={filter.languages}
          placeholder='English'
          onChange={handleChange}
        />
      
        <label>Date:</label>
        <input 
          name='unix'
          type='datetime-local'
          value={moment.unix(filter.unix).format("YYYY-MM-DDTHH:mm")}
          onChange={handleTimeChange}
        />

      </form>
    </div>
  )
}

// class FilterForm extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   componentDidMount() {
//     this.props.fetchClasses();
//     this.props.fetchAllClassTimes()
//   }
//   render() {
//     return (
//       <h2>FilterForm</h2>
//     )
//   }
// }

export default FilterForm;