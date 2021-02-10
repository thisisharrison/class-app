import React, { useEffect, useState } from "react"
import moment from 'moment';
import languages from 'languages';

const langscodes = languages.getAllLanguageCode()

const FilterForm = ({ updateFilter, filters, fetchClasses, fetchAllClassTimes, fetchSaves}) => {
  const [filter, setFilter] = useState({});
  const [tags, setTags] = useState({});
  // {key: true,
  // key2: true} => to deselect, if e.target.value is true in tags, delete from tags

  // TODO 2 Use previous filters from state on mount

  // Component did mount => fetch class with redux store's filter
  // Other subsequent rerender will be caused by dispatching updateFilter
  // which calls fetchClasses with redux store's filter
  useEffect(() => {
    fetchClasses({})
  }, [])
  
  useEffect(() => {
    fetchSaves()
  }, [])
  
  // handle deselect and remove key from filter
  const handleChange = (e, value = undefined) => {
    let updatedField;
    if (value) {
      updatedField = { [e.target.name]: value };
      updateFilter(e.target.name, value)
    } else {
      if (filter[e.target.name]) {
        updatedField = { [e.target.name]: [...filter[e.target.name], e.target.value] };
      } else {
        updatedField = { [e.target.name]: [e.target.value] };
      }
      updateFilter(e.target.name, e.target.value)
    }
    const editedFitler = Object.assign({}, filter, updatedField);
    setFilter(editedFitler);
  }

  const handleTimeChange = e => {
    const unixTime = moment(e.target.value).unix();
    handleChange(e, unixTime);
  }

  return (
    <div>
      <pre>{JSON.stringify(filters)}</pre>
      <pre>{JSON.stringify(filter)}</pre>
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