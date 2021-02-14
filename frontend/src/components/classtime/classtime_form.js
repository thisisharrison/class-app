import moment from 'moment';
import React, { Component } from 'react'
import ClassTimeIndexItem from './classtime_index_item';
import { FormControl, Grid, TextField, Container } from '@material-ui/core'
import { SubmitInput } from '../session/session_style'

class ClassTimeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: moment().format("YYYY-MM-DDTHH:mm"),
      endTime: moment().add(60, 'minutes').format("YYYY-MM-DDTHH:mm"),
      newClassTime: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      if (field === 'startTime') {
        this.setState({
          [field]: e.currentTarget.value,
          endTime: moment(e.currentTarget.value).add(60, 'minutes').format("YYYY-MM-DDTHH:mm")
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
      <div className="formWrapper">
        <Container maxwidth="sm">
        <h2>Add New Class Time</h2>

        <form onSubmit={this.handleSubmit}>
          <FormControl
            fullWidth
            variant="outlined"
          >
            
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={2}
          >
          <Grid item xs>
          <TextField 
            label="Start Time"
            type="datetime-local"
            value={this.state.startTime}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.update('startTime')}
          />
          </Grid>
          <Grid item xs>
          <TextField
            label="End Time"
            type="datetime-local"
            value={this.state.endTime}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.update('endTime')}
          />
          </Grid>
          </Grid>
          
          <SubmitInput type="submit" value={btn} />
          
          </FormControl>
        </form>
        <br />
        </Container>
        
      </div>
    )
  }
} 

export default ClassTimeForm;