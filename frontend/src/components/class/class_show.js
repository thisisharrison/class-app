import React, { Component } from 'react'
import ClassDetail from './class_detail'
import { Link, withRouter } from 'react-router-dom';
import ClassTimeIndexContainer from '../classtime/classtime_index_container';
import ClassFormContainer from '../class_form/class_form_container'
import ClassTimeFormContainer from '../classtime/classtime_form_container';

class ClassShow extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchClass(this.props.classId)
  }

  // only admin can see the edit button on their own classes
  renderEditButton() {
    if (this.isClassOwner()) {
      return (
        <div>
        <Link to={`/classes/${this.props.classId}/edit`}>Edit</Link>
        </div>
      )
    }
  }

  isClassOwner() {
    return this.props._class && this.props.currentUserId
  }

  isEdit() {
    return this.props.match.path.includes('edit') && this.isClassOwner()
  }

  render() {
    const { classId, _class } = this.props;

    if (!this.isEdit()) {
      return (
        <div>
          <h1>Not editing</h1>

          <Link to="/classes">Back to All Classes</Link>
          <ClassDetail 
            _class={_class}
          /> 
          
          <ClassTimeIndexContainer 
            // _class={_class}
            classId={classId}
            isEdit={false}
            isClassOwner={this.isClassOwner()}
          />
          
        </div>
      )
    } else {
      return (
        <div>
          <h1>Editing</h1>

          <Link to="/classes">Back to All Classes</Link>

          <ClassFormContainer 
            _class={_class}
            isNew={false}
          />

          <ClassTimeFormContainer 
            classId={classId}
          />

          <ClassTimeIndexContainer
            // _class={_class}
            classId={classId}
            isEdit={true}
            isClassOwner={this.isClassOwner()}
          />

        </div>
      )
    }
  }
}

export default withRouter(ClassShow);