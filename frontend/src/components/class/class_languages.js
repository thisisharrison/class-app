import languages from 'languages';
import { useState } from 'react';

const langscodes = languages.getAllLanguageCode()


const Languages = ({updateLanguages, prexistLanguages = []}) => {
  const [_languages, setLanguages] = useState([...prexistLanguages]);

  return (
    <div>
    <h2>Languages Offered</h2>
    <ul>
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
    </select>
    </div>
  )
}

export default Languages;