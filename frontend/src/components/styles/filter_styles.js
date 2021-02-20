import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      marginRight: theme.spacing(0.5),
      lineHeight: '1.4rem'
    },
  },
  div: {
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
    overflow: 'scroll auto',
    '&::webkit-scrollbar': {
      display: 'none'
    }
  }
}));