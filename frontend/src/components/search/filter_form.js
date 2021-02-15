import React, { useEffect, useState } from "react"
import moment from 'moment';
import languages from 'languages';
import { INTERESTS } from '../class_form/class_taggings'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Chip, Divider, Modal, Paper, Box, TextField } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { DateModal, LanguageModal } from './filter_modals' 
import { langscodes } from '../class_form/class_languages'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      marginRight: theme.spacing(0.5),
    }
  },
  div: {
    marginBottom: theme.spacing(4),
  }
}));

const FilterForm = ({ updateFilter, filters, fetchClasses, updateFilterParams, fetchAllClassTimes, fetchSaves}) => {
  const [filter, setFilter] = useState({});
  const [tags, setTags] = useState({});
  const [visible, setVisible] = useState({ date: false, lang: false })
  
  const styles = useStyles();
  
  // useEffect(() => {
  //   fetchClasses({})
  // }, [])
  
  useEffect(() => {
    fetchSaves()
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
    <div className={styles.div}>
      <pre>Redux: {JSON.stringify(filters)}</pre>
      <pre>Component: {JSON.stringify(filter)}</pre>
      
      <form>
        <Grid container alignitems="center">
          <Grid item xs={2}>
            <Grid container spacing={0.5} justify="flex-start" alignItems="flex-start" direction="row">
              <Grid item xs>
                <Chip 
                  label="All"
                  onClick={handleReset}
                />
              </Grid>
              <Grid item xs>
                <div className="filter-chip">
                  <Chip 
                    label="Date"
                    onClick={() => setVisible(Object.assign({}, visible, { date: !visible.date }))}
                  />
                  <div className={visible.date ? 'filter-popup-open' : 'filter-popup'}>
                    <Paper m={10} p={10}>
                      <TextField
                        label="Start Time"
                        type="date"
                        name="startTime"
                        value={filter.startTime ? moment.unix(filter.startTime).format("YYYY-MM-DD") : moment().format("YYYY-MM-DD")}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={handleTimeChange}
                      />
                    </Paper>
                  </div>
                </div>
              </Grid>
        
              <Grid item xs>
                <div className="filter-chip">
                  <Chip
                    label="Languages Offered"
                    onClick={() => setVisible(Object.assign({}, visible, { lang: !visible.lang }))}
                  />
                  <div className={visible.lang ? 'filter-popup-open' : 'filter-popup'}>
                    <Paper m={10} p={10}>
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
                    </Paper>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs>    
            <Grid container wrap="nowrap" spacing={2} overflow="visible">
              <Grid item xs className={styles.root}>
              <Divider orientation="vertical" flexItem />
              {INTERESTS.map(interest =>
                <Chip
                  key={`filter-form-${interest}`}
                  label={interest}
                  onClick={e => handleClick(e, 'tags', `${interest}`)}
                  variant={Object.keys(tags).find(tag => tag === interest) ? 'default' : 'outlined'}
                />
              )}
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </form>
    </div>
  )
}


export default FilterForm;