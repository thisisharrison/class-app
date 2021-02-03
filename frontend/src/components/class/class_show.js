import React, { Component } from 'react'
import ClassDetail from './class_detail'
import ClassTimeIndex from '../classtime/classtime_index';
import { Link, withRouter } from 'react-router-dom';
import ClassFormContainer from './class_form_container';
import ClassTimeFormContainer from '../classtime/classtime_form_container';

class ClassShow extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // If we don't have class in store, fetchClass
    if (Object.keys(this.props._class).length === 0) {
      this.props.fetchClass(this.props.classId)
    }
  }

  // only admin can see the edit button on their own classes
  renderEditButton() {
    if (this.props.isAdmin && this.props.currentUserId === this.props._class.admin) {
      return (
        <div>
        <Link to={`/classes/${this.props.classId}/edit`}
          onClick={() => this.render()}>Edit</Link>
        </div>
      )
    }
  }

  renderClassForm() {
    if (this.props.match.path.includes('edit')) {
      return <ClassFormContainer isNew={false} _class={this.props._class} />
    }
  }

  renderClassTimeForm() {
    if (this.props.match.path.includes('edit')) {
      return (<ClassTimeFormContainer />)
    }
  }

  render() {
    const { classId, _class, classTimes, fetchClassTimes, isAdmin } = this.props;
    return (
      <div>
        <Link to="/classes">Back to All Classes</Link>
        <ClassDetail 
          classId={classId}
          _class={_class}
        /> 
        {this.renderEditButton()}
        {this.renderClassForm()}
        <ClassTimeIndex
          classId={classId}
          classTimes={classTimes}
          fetchClassTimes={fetchClassTimes}
          isAdmin={isAdmin}
        />
        {this.renderClassTimeForm()}
      </div>
    )
  }
}

export default withRouter(ClassShow);