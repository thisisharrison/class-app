import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom';
import Taggings from './class_taggings'
import Languages from './class_languages'

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
    // When user refreshed the page
    if (prevProps.newClass !== this.props.newClass) {
      this.setState({ 
        newClass: this.props.newClass,
        name: this.props._class.name,
        description: this.props._class.description,
        tags: this.props._class.tags,
        languages: this.props._class.languages
      })
      // SHouldn't this be in submit????
      // if (this.props.isNew) {
        // this.setState({ redirect: true, redirectPath: `/classes/${this.props.newClass._id}` })
        // this.props.history.push(`/classes/${this.props.newClass._id}`)
      // }
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let _class = Object.assign({}, this.state);
    delete _class.newClass;
    const {isNew, createClass, updateClass } = this.props;
    if (isNew) {
      createClass(_class);
      this.setState({ redirect: true, redirectPath: `/classes/${this.props._class._id}` })
    } else {
      updateClass(
        this.props._class._id, 
        _class)
      this.setState({ redirect: true, redirectPath: `/classes/${this.props._class._id}` })
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
            prexistTags={this.state.tags}
          />
          <Languages 
            updateLanguages={(languages) => this.updateLanguages(languages)}
            prexistLanguages={this.state.languages}
          />
        </form>
          {this.renderDeleteButton()}
        <br />
        {this.state.redirect && (
          <Redirect to={this.state.redirectPath} />
        )}
      </div>
    )
  }
}

export default withRouter(ClassForm);