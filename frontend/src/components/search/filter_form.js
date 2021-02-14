import React, { useEffect, useState } from "react"
import moment from 'moment';
import languages from 'languages';
import { INTERESTS } from '../class_form/class_taggings'
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider, Modal, Paper, Box } from "@material-ui/core";
import styled from 'styled-components'
import { DateModal, LanguageModal } from './filter_modals' 

const langscodes = languages.getAllLanguageCode()

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
  const [langModal, setLangModal] = useState(false)
  const [dateModal, setDateModal] = useState(false)
  
  const styles = useStyles();
  
  useEffect(() => {
    fetchClasses({})
  }, [])
  
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

  useEffect(() => {
    const newTags = Object.keys(tags)
    const editedFilter = Object.assign({}, filter, { tags: newTags });
    setFilter(editedFilter)
  }, [tags])

  return (
    <div className={styles.div}>
      <pre>Redux: {JSON.stringify(filters)}</pre>
      <pre>Filter: {JSON.stringify(filter)}</pre>
      <pre>Tags: {JSON.stringify(tags)}</pre>
      
      <form>
        <Grid container alignitems="center" spacing={3}>
          <Grid item xs={3}>
            <Grid container spacing={1} justify="flex-start" alignItems="flex-start">
              <Grid item xs>
                <Chip
                  label='Dates'
                  variant='outlined'
                  onClick={() => setDateModal(true)}
                />
                <Modal
                  open={dateModal}
                  onClose={() => setDateModal(false)}
                >
                  <DateModal handleTimeChange={handleTimeChange}/>
                </Modal>
              </Grid>
        
              <Grid item xs>
                <Chip 
                  label='Langauge Offered'
                  variant='outlined'
                  onClick={() => setLangModal(true)}
                />
                <Modal
                  open={langModal}
                  onClose={() => setLangModal(false)}
                >
                  <LanguageModal handleChange={handleChange}/>
                </Modal>  
              </Grid>
            </Grid>
          </Grid>

          <Divider orientation="vertical" flexItem />

          <Grid item xs>  
            <Grid container wrap="nowrap" spacing={2} overflow="visible">
              <Grid item xs className={styles.root}>
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