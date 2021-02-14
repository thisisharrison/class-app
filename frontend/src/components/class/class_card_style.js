import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ((theme) => ({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#9e9e9e"
    }
  },
  card: {
    maxWidth: 400,
    height: 250,
    boxSizing: "border-box",
    display: "block",
    margin: "auto",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16)"
  },
  content: {
    textAlign: "left"
  }
}))

export default useStyles;