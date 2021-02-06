import moment from 'moment';

const ClassTimeIndexItem = ({ classTime, isEdit, destroyClassTime, updateClassTime, editClassTime}) => {
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

  const bookingButtons = !isEdit ? (
    <ul>
      <button type="button">
        Book
      </button>
    </ul>
  ) : ''

  return (
    <div>
      <p>Starts: {startTime}</p>
      <p>Ends: {endTime}</p>
      {editButtons}
      {bookingButtons}
    </div>
  )
}

export default ClassTimeIndexItem;