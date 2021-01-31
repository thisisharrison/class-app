import React, { Component } from 'react'

export default class ClassIndexItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props._class.name}</p>
      </div>
    )
  }
}
