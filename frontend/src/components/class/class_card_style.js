import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

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
    height: 280,
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