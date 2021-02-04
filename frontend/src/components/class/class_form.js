import React, { Component } from 'react'
import { Redirect, useHistory, withRouter } from 'react-router-dom';

class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      tags: [],
      languages: [],
      newClass: {}
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.newClass._id) {
      this.props.history.push(`/classes/${nextProps.newClass._id}`)
    } else {
      this.setState({ newClass: nextProps.newClass })
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
    this.setState({
      name: '',
      description: '',
      tags: [],
      languages: [],
    })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleDelete() {
    return e => {
      e.preventDefault();
      const {destroyClass, history} = this.props
      destroyClass(this.props._class._id)
      history.push('/classes')
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
        </form>
          {this.renderDeleteButton()}
        <br />
      </div>
    )
  }
}

export default withRouter(ClassForm);