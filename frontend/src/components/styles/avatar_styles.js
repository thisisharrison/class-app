import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: '0.85rem'
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));