import SaveContainer from '../toggles/save_container';

import { Avatar, Divider, Grid } from '@material-ui/core'
import { DetailSection, H3, ContentUl } from '../styles/class_styles';
import Chip from '@material-ui/core/Chip';


const ClassDetail = ({ _class }) => {
  const langs = _class.languages.join(', ');
  const tags = _class.tags.map((tag, idx) => <Chip key={`tag-${idx}`} label={tag} />);
  return (
  <div>
      <Grid item xs={12}>
        <div className="class-detail-name">
        <h2>{_class.name}</h2>
        <SaveContainer classId={_class._id} />
        </div>
      <p>{_class.admin.city}</p>
      <p>{_class.admin.affiliate}</p>
      

      <DetailSection>
      <Divider />
      <div className="class-detail-instructor-top">
        <H3>Online Class taught by {_class.admin.fname + _class.admin.lname}</H3>
        <Avatar alt={`${_class.admin.fname + _class.admin.lname}`} src={_class.admin.photo} />
      </div>
      <ul>
        <li>Taught in {langs}</li>
      </ul>
      </DetailSection>
      
      <DetailSection>
      <Divider />
        <H3>What you'll do</H3>
        <p>{_class.description}</p> 
        <ContentUl>
          {tags}
        </ContentUl>
      </DetailSection>

      <DetailSection>
      <Divider />
        <H3>How to participate</H3>
        <p>Zoom</p>
      </DetailSection>

      <DetailSection>
      <Divider />
          <div className="class-detail-instructor-bottom">
            <Avatar alt={`${_class.admin.fname + _class.admin.lname}`} src={_class.admin.photo} />
            <H3>Meet your instructor, {_class.admin.fname + _class.admin.lname}</H3>
          </div>
          <p>{_class.admin.bio}</p>
      </DetailSection>

      </Grid>

  </div>
)}


export default ClassDetail;
