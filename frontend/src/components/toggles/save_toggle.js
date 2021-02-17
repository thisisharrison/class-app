import React, { Component } from 'react';
import { withRouter } from 'react-router';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

class SaveToggle extends Component {
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
    if (!this.props.isAuthenticated) {
      this.props.promptLogin();
      return;
    }
    if (this.state.save) {
      this.props.destroySave(this.props.classId)
    } else {
      this.props.newSave(this.props.classId)
    }
    this.setState({ save: !this.state.save })
  }

  render() {
    const button = this.state.save ? <FavoriteRoundedIcon style={{ color: '#d31334' }}/> : <FavoriteBorderRoundedIcon />
    return (
      <IconButton aria-label="save" onClick={() => this.toggleSave(this.props.classId)}>
        {button}
      </IconButton>
    )
  }
}

export default withRouter(SaveToggle);