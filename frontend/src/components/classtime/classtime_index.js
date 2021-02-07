import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import ClassTimeFormContainer from './classtime_form_container';
import ClassTimeIndexItem from './classtime_index_item'

// class ClassTimeIndex extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       classTimes: []
//     }
//   }

//   componentDidMount() {
//     this.props.fetchClassTimes(this.props.classId)
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.classTimes !== prevProps.classTimes) {
//       this.setState({ classTimes: this.props.classTimes })
//     }
//   }

//   renderClassTimeForm() {
//     if (this.props.isEdit) {
//       return (<ClassTimeFormContainer classId={this.props.classId} />)
//     }
//   }
  
//   render() {
//     console.log('render')
//     if (this.state.classTimes.length === 0) {
//       return (
//       <div>
//           {this.renderClassTimeForm()}
//           <h2>No Class Times Available</h2>
//       </div>
//       )
//     } else {
//       return(
//           <div>
//           {this.renderClassTimeForm()}
//             <h2>All Class Times</h2>
//             {this.state.classTimes.map(classTime => (
//               <ClassTimeIndexItem 
//                 key={classTime._id} 
//                 classTime={classTime} 
//                 isEdit={this.props.isEdit}
//                 destroyClassTime={this.props.destroyClassTime}
//                 editClassTime={this.props.editClassTime}
//               />
//             ))}
//           </div>
//         )
//     }
//   }
// }



const ClassTimeIndex = ({ _class, bookings, isEdit, destroyClassTime, editClassTime}) => {
  const classTimes = _class.classTimes
  if (!classTimes) {
    return (
      <div>
        <h2>No Class Times Available</h2>
      </div>
    )
  } else {
    const classTimesList = classTimes.map(classTime => {
      const booked = bookings.find(booking => booking._id === classTime._id) ? true : false
      return (
      <ClassTimeIndexItem 
        key={classTime._id}
        classTime={classTime}
        isEdit={isEdit}
        destroyClassTime={destroyClassTime}
        editClassTime={editClassTime}
        booked={booked}
      />)})
      
    return (
      <div>
        <h2>All Class Times</h2>
        <ul>
          {classTimesList}
        </ul>
      </div>
    )
  }
}


export default withRouter(ClassTimeIndex);