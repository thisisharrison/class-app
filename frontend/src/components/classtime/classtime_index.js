import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import ClassTimeFormContainer from './classtime_form_container';
import ClassTimeIndexItem from './classtime_index_item'

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
    if (this.props.classTimes !== prevProps.classTimes) {
      this.setState({ classTimes: this.props.classTimes })
    }
  }
  
  render() {
    console.log('render')
    if (this.state.classTimes.length === 0) {
      return (<h2>No Class Times Available</h2>)
    } else {
      return(
          <div>
            <h2>All Class Times</h2>
            {this.state.classTimes.map(classTime => (
              <ClassTimeIndexItem key={classTime._id} classTime={classTime} />
            ))}
          </div>
        )
    }
  }
}

export default withRouter(ClassTimeIndex);