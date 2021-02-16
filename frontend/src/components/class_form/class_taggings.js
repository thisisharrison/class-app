import { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

// export preset list of tags for users to choose from
// filter form uses the exported list
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
  
  const [taggings, setTaggings] = useState([]);
  
  // Load prexist tags when editing Class
  useEffect(() => {
    setTaggings([...prexistTags]);
  }, [prexistTags]);
  
  // Only when using custom multi select
  const [tag, setTag] = useState('');
  
  // Only when using custom multi select
  const onKeyDown = e => {
    if ((e.key === 'Enter' || e.keyCode === 13) && tag) {
      setTaggings([...taggings, tag]);
      updateTags([...taggings, tag]);
      setTag('');
      e.preventDefault()
    } else if ((e.key === 'Backspace' || e.keyCode === 8 || e.keyCode === 46) && !tag) {
      taggings.pop();
      setTaggings([...taggings]);
      updateTags([...taggings]);
    }
  }
  
  // On change update state's tags and class form's state tags
  return (
    <div>
      <h2>Tags</h2>
      <Autocomplete
        multiple
        id="class-tags"
        options={INTERESTS}
        getOptionLabel={(option) => option}
        value={[...taggings]}
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