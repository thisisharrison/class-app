import { useEffect } from "react"

const FilterForm = ({ fetchClasses, fetchAllClassTimes}) => {
  useEffect(() => {
    fetchClasses()
    fetchAllClassTimes()
  }, [])
  return (
    <h2>FilterForm</h2>
  )
}

export default FilterForm;