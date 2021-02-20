import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import styled from 'styled-components'

export const ContentUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 1rem;
`

export const DetailSection = styled.section`
  padding-top: 3rem;
  padding-bottom: 3rem;
  h3 {
    margin: 1.875rem 0 1.875rem;
  }
  p {
    margin: 0 auto 1.2rem;
  }
`

export const useStyles = makeStyles((theme) => ({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#9e9e9e"
    }
  },
  card: {
    // maxWidth: 400,
    // height: 250,
    boxSizing: "border-box",
    display: "block",
    margin: "auto",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
    fontFamily: 'sans-serif'
  },
  content: {
    textAlign: "left"
  },
  chip: {
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: '0.875rem',
    '& > *': {
      marginRight: theme.spacing(0.5),
    }
  },
  divider: {
    margin: theme.spacing(0.5)
  }
}))

export const bookStyles = makeStyles((theme) => ({
  root: {
    palette: {
      primary: {
        main: '#000'
      }
    },
    typography: {
      fontFamily: 'Sans-Serif'
    }
  }
}));

export const MyPaper = styled(Paper)`
  padding: 20px;
`

export const TileH2 = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  font-family: Sans-serif;
  margin: 0;
`