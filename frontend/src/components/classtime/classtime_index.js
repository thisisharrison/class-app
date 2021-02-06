import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import ClassTimeFormContainer from './classtime_form_container';
import ClassTimeIndexItem from './classtime_index_item'

class ClassTimeIndex extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   classTimes: []
    // }
  }

  componentDidMount() {
    if (this.props.classTimes.length === 0) {
      this.props.fetchClassTimes(this.props.classId)
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.classTimes !== prevProps.classTimes) {
  //     this.setState({ classTimes: this.props.classTimes })
  //   }
  // }

  renderClassTimeForm() {
    if (this.props.isEdit) {
      return (<ClassTimeFormContainer classId={this.props.classId} />)
    }
  }
  
  render() {
    console.log('render')
    if (this.props.classTimes.length === 0) {
      return (
      <div>
          {this.renderClassTimeForm()}
          <h2>No Class Times Available</h2>
      </div>
      )
    } else {
      return(
          <div>
          {this.renderClassTimeForm()}
            <h2>All Class Times</h2>
            {this.props.classTimes.map(classTime => (
              <ClassTimeIndexItem 
                key={classTime._id} 
                classTime={classTime} 
                isEdit={this.props.isEdit}
                destroyClassTime={this.props.destroyClassTime}
                editClassTime={this.props.editClassTime}
              />
            ))}
          </div>
        )
    }
  }
}

export default withRouter(ClassTimeIndex);