import ClassFormContainer from './class_form_container';

import languages from 'languages';
const langscodes = languages.getAllLanguageCode()

const ClassDetail = ({ _class, isEdit, isNew }) => {
  let classform;
  if (isEdit) {
    classform = <ClassFormContainer isNew={false} _class={_class} />;
  }
  if (isNew) {
    return (<ClassFormContainer isNew={true} _class={_class} />)
  }
  return (
  <div>
    <h2>{_class.name}</h2>
    <p><strong>Class Name:</strong>{_class.name}</p>
    <p><strong>Class Description:</strong>{_class.description}</p> 
    <p><strong>Tags:</strong></p>
    <ul>
    {_class.tags.map((tag, idx) => <li key={`tag-${idx}`}>{tag}</li>)}
    </ul>
    <p><strong>Languages Offered:</strong></p>
    <ul>
      {_class.languages.map((langcode, idx) => <li key={langcode}>{languages.getLanguageInfo(langcode).nativeName}</li>)}
    </ul>
    <p><strong>Ambassador:</strong>John Doe</p>
    <p><strong>Bio:</strong>Hey there...</p>
    {classform}
  </div>
)}


export default ClassDetail;
