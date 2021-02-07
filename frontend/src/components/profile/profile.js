import React, { Component } from 'react'
import ClassTimeIndexItem from '../classtime/classtime_index_item'
import BookContainer from '../toggles/book_container'
import SaveContainer from '../toggles/save_container'

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
          {saves.map(classId => 
            <div>
              <li key={classId}>{classId}</li>
              <SaveContainer 
                classId={classId}
                saved={saves.includes(classId)}/>
            </div>)}
        </ul>
        <h2>Your Booked Class Times</h2>
        <ul>
          {bookings.map(classTimeId => 
            <div>
            <li key={classTimeId}>{classTimeId}</li>
            <BookContainer 
              classTimeId={classTimeId} 
              booked={bookings.includes(classTimeId)} />
            </div>
            )}
        </ul>
      </div>
    )
  }
}
