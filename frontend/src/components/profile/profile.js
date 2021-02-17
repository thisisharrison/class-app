import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ClassIndexItem from '../class/class_index_item'
import ClassTimeIndexItem from '../classtime/classtime_index_item'
import ProfileForm from './profile_form'

import { MyPaper } from '../styles/class_styles'
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import LoadingIcon from '../class/loading_icon'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookingIds: [],
      saveIds: [],
      classIds: [],
      editing: false
    }
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchBookings();
    this.props.fetchSaves();
    if (this.props.currentUser.isAdmin) {
      this.props.fetchAdminClasses();
    }
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
    } else if (prevProps.classes !== this.props.classes) {
      const classIds = this.props.classes.map(_class => _class._id)
      this.setState({
        classIds
      })
    }
  }

  handleEdit() {
    const edit = !this.state.editing;
    this.setState({editing: edit});
  }
 
  render() {
    const { currentUser, bookings, saves, classes, loading } = this.props;

    if (loading) {
      return (<LoadingIcon />);
    }

    const addClass = (
      <Link to='/new-class'>
        <Grid container
          direction="column"
          justify="center"
          alignItems="center"
        >    
          <AddRoundedIcon fontSize="large" />
          <h3>Create New Class</h3>
        </Grid>
      </Link>
    )

    const adminClasses = (currentUser.isAdmin && classes.length) ? 
    (
      <div>
        <h2>Your Classes</h2>
        <Grid container spacing={2} alignItems="center">
          {classes.map(_class =>
            <Grid item xs={4}>
              <ClassIndexItem
                key={_class._id}
                _class={_class}
                savesIds={this.state.saveIds} />
            </Grid>
          )}
          <Grid item xs={4}>
            {addClass}
          </Grid>
        </Grid>
      </div>
    ) : (
      <div>
        <h2>You have no Classes yet. </h2>
        {addClass}
      </div>
    )

    const savedClasses = saves.length ? 
      (
        <div>
          <h2>Your Saved Classes</h2>
          <Grid container spacing={2}>
            {saves.map(_class => 
              <Grid item xs={4}>
                <ClassIndexItem 
                  key={_class._id}
                  _class={_class}
                  savesIds={this.state.saveIds}/>
              </Grid>
              )}
          </Grid>
        </div>
        ) : 
        (
          <h2>You have no Saved Class yet.</h2>
        )
      
      const bookedClassTimes = bookings.length ? 
      (
        <div>
          <h2>Your Booked Class Times</h2>
          <Grid container spacing={2}>
            {bookings.map(classTime =>
              <Grid item xs={6}>
                <MyPaper>
                  <ClassTimeIndexItem
                    key={classTime._id}
                    classTime={classTime}
                    booked={this.state.bookingIds.includes(classTime._id)} />
                </MyPaper>
              </Grid>
            )}
          </Grid>
        </div>
      ) : (
        <h2>You have no Booked Class Times yet.</h2>
      )
    
    return (
      <div>
        <h1>Hi, I'm {currentUser.email}</h1>
        {this.state.editing ? <Link onClick={this.handleEdit}>Close Edit</Link>: <Link onClick={this.handleEdit}>Edit Profile</Link>}
        {this.state.editing ? <ProfileForm currentUser={currentUser}/> : <></>}

        {adminClasses}

        {savedClasses}

        {bookedClassTimes}

      </div>
    )
  }
}
