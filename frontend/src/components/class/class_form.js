import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom';
import Taggings from './class_taggings'

class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      tags: [],
      languages: [],
      newClass: {},
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    if (!this.props.isNew) {
      this.setState({
        name: this.props._class.name,
        description: this.props._class.description
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.newClass !== this.props.newClass) {
      this.setState({ newClass: this.props.newClass })
      if (this.props.isNew) {
        this.props.history.push(`/classes/${this.props.newClass._id}`)
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
    }
    // do not clear form with setState
    // easier for user to make new updates
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

  handleDelete() {
    return e => {
      e.preventDefault();
      const {destroyClass} = this.props
      destroyClass(this.props._class._id)
      this.setState({ redirect: true })
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
      <div>
        {header}
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.name}
            onChange={this.update('name')}
            placeholder="name"
          />
          <textarea 
            value={this.state.description}
            onChange={this.update('description')}
            placeholder="description"
          />
          <input type="submit" value={
            this.props.isNew ? 'Create Class' : 'Edit Class'
          } />
          <Taggings 
            updateTags={(taggings) => this.updateTags(taggings)}
          />
          
        </form>
          {this.renderDeleteButton()}
        <br />
        {this.state.redirect && (
          <Redirect to="/classes" />
        )}
      </div>
    )
  }
}

export default withRouter(ClassForm);