import moment from 'moment';
import BookContainer from '../toggles/book_container';

const ClassTimeIndexItem = ({ classTime, booked, isEdit, destroyClassTime, updateClassTime, editClassTime}) => {
  
  let { startTime, endTime } = classTime;
  startTime = moment.unix(startTime).format("dddd, MMMM Do YYYY, h:mm:ss a")
  endTime = moment.unix(endTime).format("dddd, MMMM Do YYYY, h:mm:ss a")
  const editButtons = isEdit ? 
    (<ul>
      <button
        onClick={() => editClassTime(classTime)}>
        Edit
      </button>
      <button 
        onClick={() => destroyClassTime(classTime._id) }
      >Remove</button>
    </ul>) : ''

  return (
    <div>
      <p>Starts: {startTime}</p>
      <p>Ends: {endTime}</p>
      {!isEdit ? <BookContainer booked={booked} classTimeId={classTime._id} /> : editButtons }
    </div>
  )
}

export default ClassTimeIndexItem;