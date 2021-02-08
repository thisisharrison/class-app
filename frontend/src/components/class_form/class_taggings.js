import { useState } from 'react';

// autocomplete feature (bonus)
const INTERESTS = [
  'Yoga',
  'Martial Art',
  'Meditation',
  'CrossFit'
]

const Taggings = ({ updateTags, prexistTags = []}) => {
  const [tag, setTag] = useState('');
  const [taggings, setTaggings] = useState([...prexistTags])
  
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
  
  return (
    <div>
      <h2>Tags</h2>
      <ul>
        {taggings.map((tg, i) =>
          <li key={tg}>{tg}
            <button
              type="button"
              onClick={() => {
                const newTaggings = [...taggings]
                newTaggings.splice(i, 1)
                setTaggings([...newTaggings])
                updateTags([...newTaggings])
              }
              }>
              Remove
          </button>
          </li>
        )}
      </ul>
      <input 
        value={tag}
        onChange={e => setTag(e.currentTarget.value)}
        onKeyDown={e => onKeyDown(e)}
        />
      <button 
        type="button"
        onClick={(e) => {
          setTaggings([...taggings, tag])
          updateTags([...taggings, tag])
          setTag('')
          e.preventDefault()
        }}
      >Add</button>
    </div>
  )
}

export default Taggings;