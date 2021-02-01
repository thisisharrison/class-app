import moment from 'moment';

const ClassTimeIndexItem = ({classTime}) => {
  let { startTime, endTime } = classTime;
  startTime = moment.unix(startTime).format("dddd, MMMM Do YYYY, h:mm:ss a")
  endTime = moment.unix(endTime).format("dddd, MMMM Do YYYY, h:mm:ss a")
  return (
    <div>
      <p>Starts: {startTime}</p>
      <p>Ends: {endTime}</p>
    </div>
  )
}

export default ClassTimeIndexItem;