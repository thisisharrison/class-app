import moment from 'moment';
import BookContainer from '../toggles/book_container';
import { Grid, Button } from '@material-ui/core'
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import momentTz from 'moment-timezone';
import { PrimaryHref } from '../styles/styles';
import MyAvatar from '../profile/avatar';
import { useStyles } from '../styles/avatar_styles';


const ClassTimeIndexItem = ({ classTime, isEdit, fetchClassTimes, destroyClassTime, updateClassTime, editClassTime, showName = undefined }) => {
  
  let { startTime, endTime } = classTime;
  const weekday = moment.unix(startTime).format("ddd")
  const date = moment.unix(startTime).format("Do"); 
  const month = moment.unix(startTime).format("MMM"); 
  startTime = moment.unix(startTime).format("h:mm A");
  endTime = moment.unix(endTime).format("h:mm A");
  const editButtons = isEdit ? 
    (<>
      <Grid item xs>
      <Button variant="outlined"
        onClick={() => editClassTime(classTime)}>
        Edit
      </Button>
      </Grid>
      <Grid item xs>
      <Button variant="contained" disableElevation
        onClick={() => destroyClassTime(classTime._id) }
      >Remove</Button>
      </Grid>
    </>) : ''
  const timezone = momentTz.tz.guess().split('_').join(' ');

  
  const studentsCount = classTime.students.length;
  
  const styles = useStyles()

  const studentsAvatars = classTime.students.map(student => <MyAvatar key={student._id} user={student} klass={styles.small}/>)

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
      
      <Grid item xs={6}>
          {showName && <PrimaryHref to={`/classes/${classTime.class._id}`}>{classTime.class.name}</PrimaryHref>}
          <p>{startTime} - {endTime}</p>
          <small>({timezone})</small>
          <AvatarGroup max={3} classes={{
            avatar: styles.small
          }}>
            {studentsAvatars}
          </AvatarGroup>
      </Grid>
      
      <Grid item xs>
        <Grid container direction="row" justify="center" spacing={0} alignItems="center">
          { isEdit ? editButtons : <BookContainer classTimeId={classTime._id} /> }
        </Grid>
      </Grid>

      </Grid>
    </div>
  )
}

export default ClassTimeIndexItem;