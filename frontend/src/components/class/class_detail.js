import SaveContainer from '../toggles/save_container';

import { Divider } from '@material-ui/core'
import { DetailSection, useStyles } from '../styles/class_styles';
import MyAvatar from '../profile/avatar';
import Chip from '@material-ui/core/Chip';
import * as AvatarStyle from '../styles/avatar_styles'


const ClassDetail = ({ _class, editLink = null }) => {
  const langs = _class.languages.join(', ');
  const tags = _class.tags.map((tag, idx) => <Chip key={`tag-${idx}`} label={tag} />);

  const styles = useStyles();
  const avatarStyles = AvatarStyle.useStyles();

  return (
  <div>
      <div className="class-detail-name">
        <h2>{_class.name} <span>{editLink}</span></h2>
        <SaveContainer classId={_class._id} />
      </div>
      <p>{_class.admin.affiliate}, {_class.admin.city}</p>
      

      <DetailSection>
      <Divider />
      <div className="class-detail-instructor-top">
        <h3>Online Class taught by {_class.admin.fname + ' ' + _class.admin.lname}</h3>
        <MyAvatar user={_class.admin} klass={avatarStyles.large}/>
      </div>
      <ul>
        <li>Taught in {langs}</li>
      </ul>
      </DetailSection>
      
      <DetailSection>
      <Divider />
        <h3>What you'll do</h3>
        <p>{_class.description}</p> 
        <div className={styles.chip}>
          {tags}
        </div>
      </DetailSection>

      <DetailSection>
      <Divider />
        <h3>How to participate</h3>
        <p>Zoom</p>
      </DetailSection>

      <DetailSection>
      <Divider />
          <div className="class-detail-instructor-bottom">
            <MyAvatar user={_class.admin} klass={avatarStyles.large} />
            <h3>Meet your instructor, {_class.admin.fname + _class.admin.lname}</h3>
          </div>
          <p>{_class.admin.bio}</p>
      </DetailSection>


  </div>
)}


export default ClassDetail;
