import { withRouter } from 'react-router-dom';
import ClassIndexItem from './class_index_item';
import React, { Component, useEffect, useState } from 'react'

class ClassIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      savesIds: []
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.saves !== this.props.saves) {
      this.setState({ savesIds: this.props.saves.map(_class => _class._id) })
    }
  }

  render() {
    const {classes} = this.props
    if (classes.length === 0) {
      return (<div>There are no classes.</div>)
    } else {
      return (
        <div>
          <h2>All Classes</h2>
          {classes.map(_class => (
            <ClassIndexItem
              key={_class._id}
              _class={_class}
              savesIds={this.state.savesIds}
            />
          ))}
        </div>
      )
    }
  }
}


export default withRouter(ClassIndex);