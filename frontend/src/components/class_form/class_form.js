import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Taggings from './class_taggings'
import Languages from './class_languages'

import { Container, FormControl, FormHelperText, Grid, TextField, ThemeProvider } from '@material-ui/core'
import { theme, SubmitInput, SecondarySubmitInput } from '../session/session_style';

class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      tags: [],
      languages: [],
      newClass: {},
      isNew: true,
      errors: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.renderErrors = this.renderErrors.bind(this)
  }

  componentDidMount() {
    if (this.props._class) {
      this.setState({
        name: this.props._class.name,
        description: this.props._class.description,
        tags: this.props._class.tags,
        languages: this.props._class.languages,
        isNew: false
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.newClass && this.props.newClass._id && (prevProps.newClass !== this.props.newClass)) {
      this.props.history.push(`/classes/${this.props.newClass._id}`);
    }
    if (this.props.errors !== prevProps.errors) {
      this.setState({ errors: this.props.errors });
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let _class = Object.assign({}, this.state);
    delete _class.newClass;
    const {createClass, updateClass } = this.props;
    if (this.state.isNew) {
      createClass(_class);
    } else {
      new Promise ((resolve, reject) => {
        resolve(
          updateClass(this.props._class._id, _class)
        );
      })
      .then(res => this.props.history.push(`/classes/${this.props._class._id}`))
    }
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
        this.props.history.push('/classes')
      }
    }
  }

  renderDeleteButton() {
    return this.state.isNew ? '' : <SecondarySubmitInput as={'button'} onClick={this.handleDelete()}>Delete Class</SecondarySubmitInput>
  }
  
  renderErrors(key) {
    if (this.state.errors[key]) {
      return this.state.errors[key]
    }
    return false;
  } 

  render() {
    const header = this.state.isNew ? 
      (<h2>Create New Class</h2>) : 
      (<h2>Edit {this.props._class.name}</h2>)
    return (
      <div className="formWrapper">
        <ThemeProvider theme={theme}>
          <Container maxwidth="sm">
            
            {header}
            
            <FormHelperText>
              {this.renderErrors('ownership')}
            </FormHelperText>
            
            <form onSubmit={this.handleSubmit}>
              
              <FormControl
                  fullWidth
                  variant="outlined"
                >
                <TextField 
                  error={this.renderErrors('name') ? true : false}
                  helperText={this.renderErrors('name') ? this.renderErrors('name') : ''}
                  label="Name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.state.name}
                  variant="outlined"
                  onChange={this.update('name')}
                />
                <br />

                <TextField
                  error={this.renderErrors('description') ? true : false}
                  helperText={this.renderErrors('description') ? this.renderErrors('description') : ''}
                  label="Description"
                  multiline
                  rows={4}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.state.description}
                  variant="outlined"
                  onChange={this.update('description')}
                />
                <br />
                
                <Taggings 
                  updateTags={(taggings) => this.updateTags(taggings)}
                  prexistTags={this.state.tags}
                  error={this.renderErrors('tags')}
                />

                <Languages 
                  updateLanguages={(languages) => this.updateLanguages(languages)}
                  prexistLanguages={this.state.languages}
                  error={this.renderErrors('languages')}
                />

                <SubmitInput type="submit" 
                  value={
                  this.state.isNew ? 'Create Class' : 'Edit Class'
                } />

                {this.renderDeleteButton()}
              
              </FormControl>
            
            </form>
            
            <br />
          
          </Container>
        </ThemeProvider>
      </div>
    )
  }
}

export default withRouter(ClassForm);