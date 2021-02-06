import React, { Component } from 'react'

export default class SaveToggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      save: false
    }
    this.toggleSave = this.toggleSave.bind(this);
  }

  componentDidMount() {
    if (this.props.saved) {
      this.setState({ save: true })
      console.log('componentDidMount - save')
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.saved !== this.props.saved) {
      if (this.props.saved) {
        console.log('componentDidUpdate - save')
        this.setState({ save: true })
      }
    }
  }


  toggleSave() {
    console.log('Toggle Save')
    if (this.state.save) {
      this.props.destroySave(this.props.classId)
    } else {
      this.props.newSave(this.props.classId)
    }
    this.setState({ save: !this.state.save })
  }

  render() {
    const button = this.state.save ? 'Unsave' : 'Save'
    return (
      <div>
        <button onClick={() => this.toggleSave(this.props.classId)}>{button}</button>
      </div>
    )
  }
}
