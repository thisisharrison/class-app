import { withRouter } from 'react-router-dom';
import ClassIndexItem from './class_index_item';
import React, { Component, useEffect, useState } from 'react'
import { Container } from '@material-ui/core'
import { Grid } from '@material-ui/core'

const ClassIndex = ({classes}) => {
  if (classes.length === 0) {
    return (<div>There are no classes.</div>)
  } else {
    return (
      <div>
        
          <h1>All Classes</h1>
          <Grid container spacing={4}>
            {classes.map((_class, i) => (
              <Grid item xs={4} key={`classindexitem-${i}`}>
                <ClassIndexItem
                  key={`${_class._id}-${i}`}
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