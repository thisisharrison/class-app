import { Link } from "react-router-dom";
import SaveContainer from "../toggles/save_container";
import useStyles from './class_card_style'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components'
import Divider from "@material-ui/core/Divider";
import IconButton from '@material-ui/core/IconButton';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';

const TeacherCardBio = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  padding-bottom: 10px;
`

const TeacherCardDetail = styled.ul`
  margin-left: 15px;
  font-size: 16px;
  font-weight: 400;
`

const ClassIndexItem = ({ _class }) => {

  const styles = useStyles();

  const teacherInitials = _class.admin.fname[0] + _class.admin.lname[0]
  const teacherName = _class.admin.fname + ' ' + _class.admin.lname
  
  const header = (
  <h3>
    <Link to={`/classes/${_class._id}`} as="h3">
      {_class.name}
    </Link>
  </h3>)

  const subheader = (
  <ul>
    <li>{teacherName}</li>
    <li>Australia</li>
    <li>F45</li>
  </ul>
  )
  return (
    <div>
      <Card className={styles.card}>
        <CardHeader
          avatar={
            <Avatar>{teacherInitials}</Avatar>
          }
          title={header}
          subheader={subheader}
        >
        </CardHeader>
        <CardContent>
          <ul>
            <li>5+ Class Times Available</li>
          </ul>
          <ul>
            <li>Yoga CrossFit Tags ENglish Chinese</li>
          </ul>
        </CardContent>
        
        <Divider />
        <CardActions disableSpacing>
          <SaveContainer 
            classId={_class._id}
            />
          <IconButton aria-label="open calendar" >
            <CalendarTodayRoundedIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}


export default ClassIndexItem;


