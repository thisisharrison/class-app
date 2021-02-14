import { Paper } from "@material-ui/core"

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

export const DateModal = ({ handleTimeChange }) => (
<Paper>
  <input
    name='unix'
    type='datetime-local'
    // value={moment.unix(filter.unix).format("YYYY-MM-DDTHH:mm")}
    onChange={handleTimeChange}
  />
</Paper>
)