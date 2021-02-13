import { useEffect, useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';


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

// autocomplete feature (bonus)
const INTERESTS = [
  'Yoga',
  'Martial Art',
  'Meditation',
  'CrossFit'
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
      <div className="myTagging">
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
      >Add</ColorButton>
      </div>
  )
}

export default Taggings;