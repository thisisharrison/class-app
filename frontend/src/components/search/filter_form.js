import React, { useEffect } from "react"

const FilterForm = ({ fetchClasses, fetchAllClassTimes, fetchSaves}) => {
  useEffect(() => {
    fetchClasses()
    fetchAllClassTimes()
    fetchSaves()
  }, [])
  return (
    <h2>FilterForm</h2>
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