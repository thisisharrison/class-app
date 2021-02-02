import { Link } from "react-router-dom";

const ClassDetail = ({ _class }) => (
  <div>
    <p><strong>Class Name:</strong>{_class.name}</p>
    <p><strong>Class Description:</strong>{_class.description}</p> 
    <p><strong>Ambassador:</strong>John Doe</p>
    <p><strong>Bio:</strong>Hey there...</p>
  </div>
)


export default ClassDetail;
