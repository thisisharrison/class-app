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

  componentWillReceiveProps(nextProps) {
    this.setState({ newClass: nextProps.newClass })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let _class = Object.assign({}, this.state);
    delete _class.newClass;
    this.props.createClass(_class);
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
    return (
      <div>
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
          <input type="submit" value="Create Class" />
        </form>
        <br />
        <ClassIndexItem _class={this.state.newClass}/>
      </div>
    )
  }
}
