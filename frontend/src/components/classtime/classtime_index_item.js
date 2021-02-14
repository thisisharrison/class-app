import moment from 'moment';
import BookContainer from '../toggles/book_container';
import { Grid, Chip } from '@material-ui/core'
import { DoneIcon } from '@material-ui/icons';

// These should be handled separately
// isEdit, destroyClassTime, updateClassTime, editClassTime

const ClassTimeIndexItem = ({ classTime, isEdit, fetchClassTimes, destroyClassTime, updateClassTime, editClassTime }) => {
  
  let { startTime, endTime } = classTime;
  const weekday = moment.unix(startTime).format("ddd")
  const date = moment.unix(startTime).format("Do"); 
  const month = moment.unix(startTime).format("MMM"); 
  startTime = moment.unix(startTime).format("h:mm A");
  endTime = moment.unix(endTime).format("h:mm A");
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
    <div className="classtime-index-item">
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={2}
      >
      
      <Grid item xs>
      <div className="classtime">
        <h5>{weekday}</h5>
        <h5 className="classtime-date">{date}</h5>
        <h5>{month}</h5>
      </div>
      </Grid>
      
      {/* {classTime.class ? <p>{classTime.class.name}</p> : ''} */}
      
      <Grid item xs={6}>
      <p>Starts: {startTime}</p>
      <p>Ends: {endTime}</p>
      </Grid>
      
      <Grid item xs>
      { isEdit ? editButtons : <BookContainer classTimeId={classTime._id} /> }
      </Grid>

      </Grid>
    </div>
  )
}

export default ClassTimeIndexItem;