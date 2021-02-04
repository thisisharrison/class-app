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

  componentDidUpdate(prevProps) {
    if (this.props.newClassTime !== prevProps.newClassTime && this.props.newClassTime) {
      const { startTime, endTime } = this.props.newClassTime;
      this.setState({
        startTime: moment.unix(startTime).format("YYYY-MM-DDTHH:mm"), 
        endTime: moment.unix(endTime).format("YYYY-MM-DDTHH:mm")
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const payload = {
      startTime: moment(this.state.startTime).unix(),
      endTime: moment(this.state.endTime).unix()
    }
    if (this.props.newClassTime) {
      // Editing
      this.props.updateClassTime(this.props.newClassTime._id, payload);
    } else {
      // Creating
      this.props.createClassTime(this.props.classId, payload);
    }
    this.setState({
      startTime: '',
      endTime: '',
      newClassTime: ''
    })
  }

  render() {
    const btn = !!this.props.newClassTime ?  'Edit Class Time' : 'Create Class Time';
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
          <input type="submit" value={btn} />
        </form>
        <br />
      </div>
    )
  }
} 

export default ClassTimeForm;