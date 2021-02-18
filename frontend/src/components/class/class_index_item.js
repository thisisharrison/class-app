import { Link } from "react-router-dom";
import SaveContainer from "../toggles/save_container";
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import { Grid, Chip, IconButton, Divider, Avatar, CardActions, CardContent, CardHeader, Card  } from '@material-ui/core';
import { useStyles, TileH2 } from '../styles/class_styles';


const ClassIndexItem = ({ _class }) => {

  const styles = useStyles();
  
  const teacherInitials = _class.admin.fname[0] + _class.admin.lname[0]
  const teacherName = _class.admin.fname + ' ' + _class.admin.lname
  
  const header = (
    <TileH2>
      <Link to={`/classes/${_class._id}`} as="h3">
        {_class.name}
      </Link>
    </TileH2>
  )

  const subheader = (
  <ul>
    <li>{teacherName}</li>
    <li>{_class.admin.affiliate}, {_class.admin.city}</li>
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
        
        <Grid container spacing={1} justify='space-between' alignItems='flex-start'>
          <Grid item xs>
            <CardHeader
              avatar={avatar}
              title={header}
              subheader={subheader}
            />
          </Grid>
          <Grid item xs={2}>
            <CardActions disableSpacing>
              <SaveContainer
                classId={_class._id}
              />
            </CardActions>
          </Grid>
        </Grid>

        <CardContent>  
          
          <div className={styles.chip}>
            {tags}
          </div>

          <div className={styles.divider}>
          <Divider />
          </div>

          <div className={styles.chip}>
            {languages}
          </div>
            
        </CardContent>
      </Card>
    </div>
  )
}


export default ClassIndexItem;


