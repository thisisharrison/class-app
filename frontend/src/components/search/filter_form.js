import React, { useEffect, useState } from "react"
import moment from 'moment';
import languages from 'languages';
import { INTERESTS } from '../class_form/class_taggings'
import { Grid, Chip, Divider, Paper, TextField, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { langscodes } from '../class_form/class_languages'
import { useStyles } from '../styles/filter_styles';


const FilterForm = ({ updateFilter, filters, fetchClasses, updateFilterParams, fetchAllClassTimes, fetchSaves, fetchBookings, isAuthenticated}) => {
  const [filter, setFilter] = useState({});
  const [tags, setTags] = useState({});
  const [visible, setVisible] = useState({ date: false, lang: false })
  
  const styles = useStyles();
  
  // useEffect(() => {
  //   fetchClasses({})
  // }, [])
  
  useEffect(() => {
    if (isAuthenticated) {
      fetchSaves();
      fetchBookings();
    }
  }, [])

  useEffect(() => {
    updateFilter(filter);
    updateFilterParams();
  }, [filter])
  
  const handleChange = (e, value = undefined) => {
    let updatedField;
    if (value) {
      updatedField = { [e.target.name]: [value] };
    } else {
      if (filter[e.target.name]) {
        updatedField = { [e.target.name]: [...filter[e.target.name], e.target.value] };
      } else {
        updatedField = { [e.target.name]: [e.target.value] };
      }
    }
    const editedFitler = Object.assign({}, filter, updatedField);
    setFilter(editedFitler);
  }

  const handleTimeChange = e => {
    const unixTime = moment(e.target.value).unix();
    handleChange(e, unixTime);
  }

  const handleClick = (e, target, value) => {
    e.preventDefault();
    let updatedTags;
    if (target === 'tags') {
      if (tags[value]) {
        updatedTags = Object.assign({}, tags)
        delete updatedTags[value]
      } else {
        updatedTags = Object.assign({}, tags, { [value]: true })
      }
      setTags(updatedTags)
    }
  }

  const handleLanguageChange = values => {
    const updatedField = { languages: values }
    const editedFilter = Object.assign({}, filter, updatedField)
    setFilter(editedFilter)
  }

  const handleReset = e => {
    setFilter({})
    setTags({})
  }

  useEffect(() => {
    const newTags = Object.keys(tags)
    const editedFilter = Object.assign({}, filter, { tags: newTags });
    setFilter(editedFilter)
  }, [tags])

  const langs = langscodes.map((langcode, i) => languages.getLanguageInfo(langcode).nativeName)

  return (
    // <pre>Redux: {JSON.stringify(filters)}</pre>
    // <pre>Component: {JSON.stringify(filter)}</pre>

    <div className={styles.div}>
      <div className={styles.root}>
        <Chip 
          label="All"
          onClick={handleReset}
        />
        <Chip 
          label="Date"
          onClick={() => setVisible(Object.assign({}, visible, { date: !visible.date }))}
        />
        <Dialog open={visible.date} onClose={(e) => setVisible(Object.assign({}, visible, { date: !visible.date }))}>
          <DialogTitle>
            Choose when you want to join a class
          </DialogTitle>
          <DialogContent>
            <TextField
              label="Start Time"
              type="date"
              name="startTime"
              fullWidth
              value={filter.startTime ? moment.unix(filter.startTime).format("YYYY-MM-DD") : moment().format("YYYY-MM-DD")}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleTimeChange}
            />
          </DialogContent>
        </Dialog>

        <Chip
          label="Languages Offered"
          onClick={() => setVisible(Object.assign({}, visible, { lang: !visible.lang }))}
        />
        <Dialog open={visible.lang} onClose={(e) => setVisible(Object.assign({}, visible, { lang: !visible.lang }))}>
          <DialogTitle>
            Choose languages you prefer
          </DialogTitle>
          <DialogContent>
            <Autocomplete
              multiple
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
                handleLanguageChange(newValue)
              }}
            />
          </DialogContent>
        </Dialog>
          
        <Divider orientation="vertical" flexItem />
    
        {INTERESTS.map(interest =>
          <Chip
            key={`filter-form-${interest}`}
            label={interest}
            onClick={e => handleClick(e, 'tags', `${interest}`)}
            variant={Object.keys(tags).find(tag => tag === interest) ? 'default' : 'outlined'}
          />
        )}
          
      </div>
    </div>        
      
  )
}


export default FilterForm;