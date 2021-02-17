import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      marginRight: theme.spacing(0.5),
    }
  },
  div: {
    marginBottom: theme.spacing(4),
  }
}));