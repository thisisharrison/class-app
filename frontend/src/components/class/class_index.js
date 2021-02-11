import { withRouter } from 'react-router-dom';
import ClassIndexItem from './class_index_item';
import React, { Component, useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'

const ClassIndex = ({classes}) => {
  if (classes.length === 0) {
    return (<div>There are no classes.</div>)
  } else {
    return (
      <div>
        <h2>All Classes</h2>
        <Grid container spacing={4}>
          {classes.map(_class => (
            <Grid item xs={3}>
              <ClassIndexItem
                key={_class._id}
                _class={_class}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}


export default withRouter(ClassIndex);