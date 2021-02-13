import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom';
import Taggings from './class_taggings'
import Languages from './class_languages'

import { Container, FormControl, Grid, TextField, ThemeProvider } from '@material-ui/core'
import { theme, SubmitInput } from '../session/session_style';

class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      tags: [],
      languages: [],
      newClass: {},
      redirect: false,
      redirectPath: '/'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    if (!this.props.isNew) {
      this.setState({
        name: this.props._class.name,
        description: this.props._class.description,
        tags: this.props._class.tags,
        languages: this.props._class.languages
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.newClass !== this.props.newClass) {
      this.setState({ 
        newClass: this.props.newClass,
        // name: this.props._class.name,
        // description: this.props._class.description,
        // tags: this.props._class.tags,
        // languages: this.props._class.languages
      })
      if (this.props.isNew) {
        this.setState({ redirect: true, redirectPath: `/classes/${this.props.newClass._id}` })
        this.setState({ redirect: false, redirectPath: '/' })
      }
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let _class = Object.assign({}, this.state);
    delete _class.newClass;
    const {isNew, createClass, updateClass } = this.props;
    if (isNew) {
      createClass(_class);
    } else {
      updateClass(
        this.props._class._id, 
        _class)
      this.setState({ redirect: true, redirectPath: `/classes/${this.props._class._id}` })
    }
    // Clean up
    this.setState({ redirect: false, redirectPath: '/' })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  updateTags(taggings) {
    this.setState({
      tags: taggings
    })
  }

  updateLanguages(languages) {
    this.setState({
      languages: languages
    })
  }

  handleDelete() {
    return async e => {
      e.preventDefault();
      const {destroyClass} = this.props
      const destroyed = await destroyClass(this.props._class._id)
      if (destroyed) {
        this.setState({ redirect: true, redirectPath: '/classes' })
      }
    }
  }

  renderDeleteButton() {
    return this.props.isNew ? '' : <button onClick={this.handleDelete()}>Delete Class</button>
  }
  
  render() {
    const header = this.props.isNew ? 
      (<h2>Create New Class</h2>) : 
      (<h2>Edit {this.props._class.name}</h2>)
    return (
      <div className="formWrapper">
        <ThemeProvider theme={theme}>
        <Container maxwidth="sm">
        {header}
        <form onSubmit={this.handleSubmit}>
          
          <FormControl
              fullWidth
              variant="outlined"
            >
          <TextField 
            type="text"
            label="Name"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={this.update('name')}
          />
          <br />

          <TextField
            label="Description"
            multiline
            rows={4}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={this.update('description')}
          />
          <br />
          {/* <input
            value={this.state.name}
            onChange={this.update('name')}
            placeholder="name"
          />
          <textarea 
            value={this.state.description}
            onChange={this.update('description')}
            placeholder="description"
          /> */}
          
          <Taggings 
            updateTags={(taggings) => this.updateTags(taggings)}
            prexistTags={this.state.tags}
          />
          <Languages 
            updateLanguages={(languages) => this.updateLanguages(languages)}
            prexistLanguages={this.state.languages}
          />
          <input type="submit" value={
            this.props.isNew ? 'Create Class' : 'Edit Class'
          } />
          {this.renderDeleteButton()}
          
          </FormControl>
        
        </form>
        
        <br />
        {this.state.redirect && (
          <Redirect to={this.state.redirectPath} />
        )}
        </Container>
        </ThemeProvider>
      </div>
    )
  }
}

export default withRouter(ClassForm);