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
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  content: {
    textAlign: "left"
  }
}))

export default useStyles;