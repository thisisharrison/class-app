import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import ClassTimeIndexItem from './classtime_index_item'

class ClassTimeIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classTimes: []
    }
  }
  
  componentWillMount() {
    this.props.fetchClassTimes(this.props.classId);
  }

  componentWillReceiveProps(newState) {
    this.setState({ classTimes: newState.classTimes })
  }

  render() {
    if (this.state.classTimes.length === 0) {
      return (<div>There are no class times with this class.</div>)
    } else {
      return (
        <div>
          <h2>All Class Times</h2>
          {this.state.classTimes.map(classTime => (
            <ClassTimeIndexItem key={classTime.id} classTime={classTime} />
          ))}
        </div>
      )
    }
  }
}

export default withRouter(ClassTimeIndex);