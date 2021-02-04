import React, { Component } from 'react'
import ClassDetail from './class_detail'
import ClassTimeIndex from '../classtime/classtime_index';
import { Link, withRouter } from 'react-router-dom';
import ClassTimeFormContainer from '../classtime/classtime_form_container';
import ClassTimeContainer from '../classtime/classtime_container';

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
    return this.props.isAdmin && this.props.currentUserId === this.props._class.admin
  }

  render() {
    const { classId, _class, isAdmin } = this.props;
    return (
      <div>
        <Link to="/classes">Back to All Classes</Link>
        <ClassDetail 
          isEdit={this.props.match.path.includes('edit')}
          classId={classId}
          _class={_class}
        /> 
        {this.renderEditButton()}
        
        <ClassTimeContainer 
          classId={classId}
          isEdit={this.props.match.path.includes('edit')}
          isClassOwner={this.isClassOwner()}
        />
        
      </div>
    )
  }
}

export default withRouter(ClassShow);