import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import styled from 'styled-components'

export const ContentUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const DetailSection = styled.section`
  padding-top: 48px;
  padding-bottom: 48px;
`
export const H3 = styled.h3`
  line-height: 30px;
  margin-bottom: 32px;
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

export const MyPaper = styled(Paper)`
  padding: 20px;
`
