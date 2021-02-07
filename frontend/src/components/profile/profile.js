import React, { Component } from 'react'
import ClassTimeIndexItem from '../classtime/classtime_index_item'
import BookContainer from '../toggles/book_container'
import SaveContainer from '../toggles/save_container'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookingIds: [],
      saveIds: []
    }
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
 
  render() {
    const { currentUser, bookings, saves } = this.props
    
    return (
      <div>
        <h1>{currentUser.email}</h1>
        <h2>Your Saved Classes</h2>
        <ul>
          {saves.map(_class => 
            <div>
              <li key={_class._id}>{_class.name}</li>
              <ul>
                <li key={`${_class._id}-teacher`}>{_class.admin.fname} {_class.admin.lname}</li>
              </ul>
              <SaveContainer 
                classId={_class._id}
                saved={this.state.saveIds.includes(_class._id)}/>
            </div>)}
        </ul>
        <h2>Your Booked Class Times</h2>
        <ul>
          {bookings.map(booking => 
            <div key={booking._id}>
            <li>{booking.class.name}</li>
            <li>{booking.class.description}</li>
            <li>{booking.startTime}</li>
            <li>{booking.endTime}</li>
            <BookContainer 
              classTimeId={booking._id} 
              booked={this.state.bookingIds.includes(booking._id)} />
            </div>
            )}
        </ul>
      </div>
    )
  }
}
