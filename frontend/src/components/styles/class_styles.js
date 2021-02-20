import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

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
  card: {
    boxSizing: "border-box",
    display: "block",
    margin: "auto",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
    typography: {
      fontFamily: 'sans-serif'
    }
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

export const MyPaper = styled(Paper)`
  padding: 20px;
`

export const TileH2 = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  font-family: Sans-serif;
  margin: 0;
`

export const NewClassLink = styled(Link)`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem;
`