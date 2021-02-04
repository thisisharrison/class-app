import ClassFormContainer from './class_form_container';

const ClassDetail = ({ _class, isEdit }) => {
  let classform;
  if (isEdit) {
    classform = <ClassFormContainer isNew={false} _class={_class} />;
  }
  return (
  <div>
    <h2>{_class.name}</h2>
    <p><strong>Class Name:</strong>{_class.name}</p>
    <p><strong>Class Description:</strong>{_class.description}</p> 
    <p><strong>Ambassador:</strong>John Doe</p>
    <p><strong>Bio:</strong>Hey there...</p>
    {classform}
  </div>
)}


export default ClassDetail;
