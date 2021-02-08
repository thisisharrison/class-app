// import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
// import { fetchClassTimes } from '../../actions/classtime_action';
import ClassTimeIndexItem from './classtime_index_item'


// const ClassTimeIndex = ({ _class, isEdit, fetchClassTimes, destroyClassTime, editClassTime }) => {
  


//   const [classTimes, setClassTimes] = useState([])
//   useEffect(() => {
//     fetchClassTimes(_class._id)
//     setClassTimes(() => _class.classTimes ? _class.classTimes : [])
//     console.log('useEffect')
//   }, [_class.classTimes])
//   // const classTimes = _class.classTimes
    
//   return (
//     <div>
//       <h2>{classTimes.length ? 'All Class Times' : 'No Class Times Available'}</h2>
//       {classTimes.map(classTime =>
//         <ClassTimeIndexItem
//           key={classTime._id}
//           classTime={classTime}
//           isEdit={isEdit}
//           destroyClassTime={destroyClassTime}
//           editClassTime={editClassTime}
//         />)}
//     </div>
      
//     )
// }

import React, { Component } from 'react'

class ClassTimeIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classTimes: []
    }
  }

  componentDidMount() {
    // if (this.props._class.classTimes) {
    //   this.setState({ classTimes: this.props._class.classTimes })
    // } else {
    this.props.fetchClassTimes(this.props.classId)
    // this.setState({ classTimes: this.props.classTimes })
    // }
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
        <h2>{this.state.classTimes.length ? 'All Class Times' : 'No Class Times Available'}</h2>
        {this.state.classTimes.map(classTime =>
          <ClassTimeIndexItem
            key={classTime._id}
            classTime={classTime}
            isEdit={isEdit}
            destroyClassTime={destroyClassTime}
            editClassTime={editClassTime}
          />)}
      </div>
    )
  }
}


export default withRouter(ClassTimeIndex);