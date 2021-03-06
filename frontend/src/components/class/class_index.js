import { withRouter } from 'react-router-dom';
import ClassIndexItem from './class_index_item';
import { Grid } from '@material-ui/core'
import LoadingIcon from './loading_icon';

const ClassIndex = ({classes, loading}) => {
  if (loading) {
    return (<LoadingIcon />);
  }
  if (classes.length === 0) {
    return (<div>There are no classes.</div>)
  } else {
    return (
      <div>
          <h1>All Classes</h1>
          <Grid container spacing={4}>
            {classes.map((_class, i) => (
              <Grid item xs={12} sm={12} md={6} lg={4} key={`classindexitem-${i}`}>
                <ClassIndexItem
                  key={`${_class._id}-${i}`}
                  _class={_class}
                />
              </Grid>
            ))}
          </Grid>
        
      </div>
    )
  }
}


export default withRouter(ClassIndex);