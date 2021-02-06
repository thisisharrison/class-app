import { withRouter } from 'react-router-dom';
import ClassIndexItem from './class_index_item';

const ClassIndex = ({classes}) => {
  if (classes.length === 0) {
    return (<div>There are no classes.</div>)
  } else {
    return (
      <div>
        <h2>All Classes</h2>
        {classes.map(_class => (
          <ClassIndexItem key={_class._id} _class={_class} />
        ))}
      </div>
    )
  }
}

export default withRouter(ClassIndex);