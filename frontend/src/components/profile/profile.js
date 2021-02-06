import React, { Component } from 'react'
import ClassTimeIndexItem from '../classtime/classtime_index_item'

export default class Profile extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBookings();
    this.props.fetchSaves();
  }

  render() {
    const { currentUser, bookings, saves} = this.props
    return (
      <div>
        <h1>{currentUser.email}</h1>
        <h2>Your Saved Classes</h2>
        <ul>
          {saves.map(classId => <li key={classId}>{classId}</li>)}
        </ul>
        <h2>Your Booked Class Times</h2>
        <ul>
          {/* {bookings.map(classTimeId => 
            <ClassTimeIndexItem key={classTimeId} 
              isEdit={false} />
            )} */}
        </ul>
      </div>
    )
  }
}
