import { Link } from "react-router-dom";

const ClassIndexItem = ({_class}) => (
  <div>
    <p>
      <Link to={`/classes/${_class._id}`} >
        {_class.name}
      </Link>
    </p>
  </div>
)


  export default ClassIndexItem;
