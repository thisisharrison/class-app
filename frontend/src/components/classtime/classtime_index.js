import { withRouter } from 'react-router-dom';
import ClassTimeIndexItem from './classtime_index_item'

const ClassTimeIndex = ({ _class, isEdit, destroyClassTime, editClassTime}) => {
  const classTimes = _class.classTimes
  if (!classTimes) {
    return (
      <div>
        <h2>No Class Times Available</h2>
      </div>
    )
  } else {
    const classTimesList = classTimes.map(classTime => {
      return (
      <ClassTimeIndexItem 
        key={classTime._id}
        classTime={classTime}
        isEdit={isEdit}
        destroyClassTime={destroyClassTime}
        editClassTime={editClassTime}
      />
      )})
      
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