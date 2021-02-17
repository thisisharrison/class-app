import { Link } from "react-router-dom";
import SaveContainer from "../toggles/save_container";
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import { Grid, Chip, IconButton, Divider, Avatar, CardActions, CardContent, CardHeader, Card  } from '@material-ui/core';
import { ContentUl, useStyles } from '../styles/class_styles';


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
    <li>{_class.admin.city}</li>
    <li>{_class.admin.affiliate}</li>
  </ul>
  )

  const avatar = (
    _class.admin.photo ? <Avatar alt={teacherName} src={_class.admin.photo} /> : <Avatar>{teacherInitials}</Avatar>
  )

  const tags = (
    _class.tags.map(tag => <Chip key={`${_class._id}-${tag}`} label={tag} />)
  )

  const languages = (
    _class.languages.map(language => <Chip key={`${_class._id}-${language}`} label={language} />)
  )

  return (
    <div>
      <Card className={styles.card}>
        <CardHeader
          avatar={avatar}
          title={header}
          subheader={subheader}
        >
        </CardHeader>
        <CardContent>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <ContentUl>
              {tags}
            </ContentUl>
            <ContentUl>
              {languages}
            </ContentUl>
          </Grid>
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


