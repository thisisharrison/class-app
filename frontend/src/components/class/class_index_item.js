import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { destroyClass } from "../../actions/class/class_action";
import SaveContainer from "../toggles/save_container";

const ClassIndexItem = ({ _class }) => {

  const teacherName = _class.admin.fname + ' ' + _class.admin.lname
  
  return (
    <div>
      <p>
        <Link to={`/classes/${_class._id}`} >
          {_class.name}
        </Link>
      </p>
      <ul>
        <li>{teacherName}</li>
        <li>{_class.description}</li>
      </ul>
      <SaveContainer 
        classId={_class._id}
        />
    </div>
  )
}


export default ClassIndexItem;


