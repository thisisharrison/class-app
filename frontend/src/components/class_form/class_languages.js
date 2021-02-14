import languages from 'languages';
import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';


const langscodes = languages.getAllLanguageCode()

const Languages = ({updateLanguages, prexistLanguages}) => {
  const [_languages, setLanguages] = useState(['English']);

  useEffect(() => {
    setLanguages([...prexistLanguages])
  }, [prexistLanguages])


  const langs = langscodes.map((langcode, i) => languages.getLanguageInfo(langcode).nativeName)
  

  return (
    <div>
    <h2>Languages Offered</h2>
    {/* Using Material UI */}
      <Autocomplete
        multiple
        id="tags-outlined"
        options={langs}
        getOptionLabel={(option) => option}
        defaultValue={['English']}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Languages"
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
        onChange={(event, newValue) => {
          setLanguages(newValue);
          updateLanguages(newValue);
        }}
      />

    {/* Custom Multi Select */}
    {/* <ul>
        {_languages.map((langcode, i) => 
        <li key={langcode}>
          {languages.getLanguageInfo(langcode).nativeName}
        </li>
        )}
    </ul>
    <select multiple={true} 
      value={_languages}
      onChange={(e) => {
        let newLanguages = [..._languages];
        if (_languages.includes(e.target.value)) {
          let idx = newLanguages.findIndex(langcode => langcode === e.target.value);
          newLanguages.splice(idx, 1)
          setLanguages(newLanguages)
          updateLanguages(newLanguages)
        } else {
          newLanguages.push(e.target.value)
          setLanguages(newLanguages)
          updateLanguages(newLanguages)
        }
      }}
    >  
      {langscodes.map((langcode, i) => 
        <option value={langcode} key={langcode}>
          {languages.getLanguageInfo(langcode).nativeName}
        </option>)}
    </select> */}
    </div>
  )
}

export default Languages;