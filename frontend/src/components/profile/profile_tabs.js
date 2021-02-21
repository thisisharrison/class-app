import React, { useState } from 'react';
import { Tabs, Tab, Box, Grid } from '@material-ui/core'
import PropTypes from 'prop-types';

export default function ProfileTabs({ 
  adminClasses,
  savedClasses,
  bookedClassTimes, 
  isAdmin}) {
  
  const [value, setValue] = useState(0)

  const handleChange = (e, newVal) => {
    setValue(newVal);
  };

  const OPTIONS = ['Saved Classes', 'Booked Classes', 'Your Classes']

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            
          >
            {isAdmin ? 
              OPTIONS.map((option, i) => <Tab label={option} key={`option-${i}`} />) : 
              OPTIONS.filter(option => option !== 'Your Classes')
                .map((option, i) => <Tab label={option} key={`option-${i}`} />)}
          </Tabs>
        </Grid>
        <Grid item xs={9}>
          <TabPanel value={value} index={0}>
            {savedClasses}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {bookedClassTimes}
          </TabPanel>
          {isAdmin && 
          <TabPanel value={value} index={2}>
            {adminClasses}
          </TabPanel>}
        </Grid>
      </Grid>
    </div>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
