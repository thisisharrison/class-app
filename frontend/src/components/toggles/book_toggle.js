import React, { Component } from 'react'
import { Grid, Chip } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done';

export default class BookToggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      book: false
    }
    this.toggleBook = this.toggleBook.bind(this);
  }

  componentDidMount() {
    if (this.props.booked) {
      this.setState({ book: true })
      console.log('componentDidMount - book')
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.booked !== this.props.booked) {
      if (this.props.booked) {
        console.log('componentDidUpdate - book')
        this.setState({ book: true })
      }
    }
  }


  toggleBook() {
    console.log('Toggle Book')
    if (this.state.book) {
      this.props.destroyBooking(this.props.classTimeId)
    } else {
      this.props.newBooking(this.props.classTimeId)
    }
    this.setState({ book: !this.state.book })
  }

  render() {
    const button = this.state.book ? 'Unbook' : 'Book'
    return (
      <div>
        <Chip
          label={button}
          clickable
          color={this.state.book ? 'primary': 'default'}
          variant={this.state.book ? 'default' : 'outlined'}
          onClick={() => this.toggleBook(this.props.classTimeId)}
        />
      </div>
    )
  }
}