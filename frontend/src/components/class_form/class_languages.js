import languages from 'languages';
import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


export const langscodes = languages.getAllLanguageCode()

const Languages = ({updateLanguages, prexistLanguages}) => {
  
  const [_languages, setLanguages] = useState([]);
  
  // Check if prexist languages exist and prefill autocomplete
  // If no prexist languages, default starts with 'English'
  useEffect(() => {
    if (prexistLanguages.length) {
      setLanguages([...prexistLanguages]);
    } else {
      setLanguages(['English']);
      updateLanguages(['English']);
    }
  }, [prexistLanguages]);

  // Get languages native names
  const langs = langscodes.map((langcode, i) => languages.getLanguageInfo(langcode).nativeName);
  
  return (
    <div>
    <h2>Languages Offered</h2>
      <Autocomplete
        multiple
        id="class-languages"
        options={langs}
        getOptionLabel={(option) => option}
        value={[..._languages]}
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