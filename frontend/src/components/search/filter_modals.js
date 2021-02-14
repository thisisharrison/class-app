// https://github.com/airbnb/react-dates
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import { Paper, TextField } from "@material-ui/core"
import moment from 'moment'
import { useEffect, useState } from "react";


export const LanguageModal = ({ handleChange }) => (
<Paper>
  <input
    name='languages'
    // value={filter.languages}
    placeholder='English'
    onChange={handleChange}
  />
</Paper>
)

export const DateModal = ({ handleTimeChange }) => {
  const [dates, setDates] = useState({})
  const [focusedInput, setFocusedInput] = useState(null)
  // state = {focusedInput, startDate, endDate}
  
  useEffect(() => {
    setDates({ startDate: null, endDate: null })
  }, [])

  return (
    <Paper>
      <TextField
        label="Date"
        type="date"
        name="startTime"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTimeChange}
      />
      
      <input
        name='unix'
        type='datetime-local'
        // value={moment.unix(filter.unix).format("YYYY-MM-DDTHH:mm")}
        onChange={handleTimeChange}
      />
      
      {/* Bonus: using Airbnb react dates */}
      {/* <DateRangePicker
        startDate={dates.startDate} // momentPropTypes.momentObj or null,
        startDateId="startTime" // PropTypes.string.isRequired,
        endDate={dates.endDate} // momentPropTypes.momentObj or null,
        endDateId="endTime" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => setDates({ startDate, endDate })} // PropTypes.func.isRequired,
        focusedInput={'startTime'} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
      /> */}
    </Paper>
  )
}