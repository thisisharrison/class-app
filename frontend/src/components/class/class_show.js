import React, { Component } from 'react'
import ClassDetail from './class_detail'
import ClassTimeIndex from '../classtime/classtime_index';
import { Link } from 'react-router-dom';

class ClassShow extends Component {
  constructor(props) {
    super(props)
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
        <ClassTimeIndex
          classId={classId}
          classTimes={classTimes}
          fetchClassTimes={fetchClassTimes}
          isAdmin={isAdmin}
        />
      </div>
    )
  }
}

export default ClassShow;