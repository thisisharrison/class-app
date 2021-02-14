import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';

const ColorButton = withStyles((theme) => ({
  root: {
    color: "#fff",
    backgroundColor: "#d31334",
    '&:hover': {
      backgroundColor: "#b81c29",
    },
    marginTop: "20px"
  },
}))(Button);

export const INTERESTS = [
  'Yoga',
  'Meditation',
  'Mindfulness',
  'Martial Art',
  'CrossFit',
  'Running',
  'HIIT',
  'Bootcamp',
  'Personal Development',
  'Nutrition'
]

const Taggings = ({ updateTags, prexistTags}) => {
  
  const [tag, setTag] = useState('');
  const [taggings, setTaggings] = useState([])
  
  const onKeyDown = e => {
    if ((e.key === 'Enter' || e.keyCode === 13) && tag) {
      setTaggings([...taggings, tag])
      updateTags([...taggings, tag])
      setTag('')
      e.preventDefault()
    } else if ((e.key === 'Backspace' || e.keyCode === 8 || e.keyCode === 46) && !tag) {
      taggings.pop();
      setTaggings([...taggings])
      updateTags([...taggings])
    }
  }

  useEffect(() => {
    setTaggings([...prexistTags])
  }, [prexistTags])
  
  return (
    <div>
      <h2>Tags</h2>
      {/* Using Material UI */}
      <Autocomplete
        multiple
        options={INTERESTS}
        getOptionLabel={(option) => option}
        // defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            label="Tags"
          />
        )}
        onChange = {(event, newValue) => {
          setTaggings(newValue)
          updateTags(newValue)
        }}
      />
      
      {/* Custom Multi Select */}
      {/* <div className="myTagging">
        <ul>
          {taggings.map((tg, i) =>
            <Chip
              key={tg}
              label={tg}
              onDelete={() => {
                const newTaggings = [...taggings]
                newTaggings.splice(i, 1)
                setTaggings([...newTaggings])
                updateTags([...newTaggings])
              }
              }
            />
          )}
          <li>
            <input
            value={tag}
            onChange={e => setTag(e.currentTarget.value)}
            onKeyDown={e => onKeyDown(e)}
          />
          </li>
        </ul>
        
      </div>
      <ColorButton
        onClick={(e) => {
          setTaggings([...taggings, tag])
          updateTags([...taggings, tag])
          setTag('')
          e.preventDefault()
        }}
        variant="contained" color="primary"
      >Add</ColorButton> */}
    </div>
  )
}

export default Taggings;