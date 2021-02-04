import moment from 'moment';
import React, { Component } from 'react'
import ClassTimeIndexItem from './classtime_index_item';

class ClassTimeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: '',
      endTime: '',
      newClassTime: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      if (field === 'startTime') {
        this.setState({
          [field]: e.currentTarget.value,
          endTime: e.currentTarget.value
        })
      } else {
        this.setState({
          [field]: e.currentTarget.value
        })
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ newClassTime: nextProps.newClassTime })
  }

  handleSubmit(e) {
    e.preventDefault();
    const payload = {
      startTime: moment(this.state.startTime).unix(),
      endTime: moment(this.state.endTime).unix()
    }
    this.props.createClassTime(this.props.classId, payload);
    this.setState({
      startTime: '',
      endTime: ''
    })
  }

  render() {
    return (
      <div>
        <h2>Add New Class Time</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Start Time</label>
          <input 
            value={this.state.startTime}
            type="datetime-local"
            onChange={this.update('startTime')}
          />
          
          <label>End Time</label>
          <input
            value={this.state.endTime}
            type="datetime-local"
            onChange={this.update('endTime')}
          />
          <input type="submit" value="Create Class Time" />
        </form>
        <br />
        <ClassTimeIndexItem classTime={this.state.newClassTime} />
      </div>
    )
  }
} 

export default ClassTimeForm;