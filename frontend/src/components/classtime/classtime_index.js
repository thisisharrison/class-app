import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import ClassTimeIndexItem from './classtime_index_item'
import { MyPaper } from '../styles/class_styles';

class ClassTimeIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classTimes: []
    }
  }

  componentDidMount() {
    this.props.fetchClassTimes(this.props.classId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.classTimes !== this.props.classTimes) {
      this.setState({ classTimes: this.props.classTimes })
    }
  }

  render() {
    const { isEdit, destroyClassTime, editClassTime } = this.props
    
    return (
      <div>
        <MyPaper>
        <h2>{this.state.classTimes.length ? 'All Class Times' : 'No Class Times Available'}</h2>
        {this.state.classTimes.map(classTime =>
          <ClassTimeIndexItem
            key={classTime._id}
            classTime={classTime}
            isEdit={isEdit}
            destroyClassTime={destroyClassTime}
            editClassTime={editClassTime}
          />)}
        </MyPaper>
      </div>
    )
  }
}


export default withRouter(ClassTimeIndex);