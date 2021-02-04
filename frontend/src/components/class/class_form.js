import React, { Component } from 'react'
import ClassIndexItem from './class_index_item';

export default class ClassForm extends Component {
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
  }

  componentDidMount() {
    if (!this.props.isNew) {
      debugger
      this.setState({
        name: this.props._class.name,
        description: this.props._class.description
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ newClass: nextProps.newClass })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let _class = Object.assign({}, this.state);
    delete _class.newClass;
    if (this.props.isNew) {
      this.props.createClass(_class);
    } else {
      this.props.updateClass(
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
        <br />
        {/* <ClassIndexItem _class={this.state.newClass}/> */}
      </div>
    )
  }
}
