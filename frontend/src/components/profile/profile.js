import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ClassIndexItem from '../class/class_index_item'
import ClassTimeIndexItem from '../classtime/classtime_index_item'
import BookContainer from '../toggles/book_container'
import SaveContainer from '../toggles/save_container'
import { MyPaper } from '../classtime/classtime_index'
import ProfileForm from './profile_form'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookingIds: [],
      saveIds: [],
      editing: false
    }
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchBookings();
    this.props.fetchSaves();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.saves !== this.props.saves) {
      const saveIds = this.props.saves.map(_class => _class._id)
      this.setState({
        saveIds
      })
    } else if (prevProps.bookings !== this.props.bookings) {
      const bookingIds = this.props.bookings.map(classTime => classTime._id)
      this.setState({
        bookingIds
      })
    }
  }

  handleEdit() {
    const edit = !this.state.editing;
    this.setState({editing: edit});
  }
 
  render() {
    const { currentUser, bookings, saves } = this.props
    
    return (
      <div>
        <h1>Hi, I'm {currentUser.email}</h1>
        {this.state.editing ? <Link onClick={this.handleEdit}>Close Edit</Link>: <Link onClick={this.handleEdit}>Edit Profile</Link>}
        {this.state.editing ? <ProfileForm currentUser={currentUser}/> : <></>}

        <h2>Your Saved Classes</h2>
        <Grid container spacing={2}>
          {saves.map(_class => 
            <Grid item xs>
            <ClassIndexItem 
              key={_class._id}
              _class={_class}
              savesIds={this.state.saveIds}/>
            </Grid>
            )}
        </Grid>
        
        <h2>Your Booked Class Times</h2>
        <MyPaper>
        <Grid container spacing={2}>
          {bookings.map(classTime => 
            <Grid item xs>
            <ClassTimeIndexItem 
              key={classTime._id}
              classTime={classTime}
              booked={this.state.bookingIds.includes(classTime._id)}/>
            </Grid>
          )}
        </Grid>
        </MyPaper>
      </div>
    )
  }
}
