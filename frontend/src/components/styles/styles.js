import { createMuiTheme } from '@material-ui/core'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Sans-Serif',
  },
  palette: {
    primary: {
      main: "#000"
    },
    secondary: {
      main: "#d22030"
    }
  }
})

export const SubmitInput = styled.input`
  font-weight: 600;
  background-color :#d31334;
  border-color: #d31334;
  color: #fff;
  border: .0625rem solid;
  border-radius: .25rem;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  margin-top: 20px;
  :hover {
    background-color: #b81c29;
    border-color: #b81c29;
  }
  :active {
    background-color: #911620;
    border-color: #911620;
  }
  :disabled {
    background-color: #bfbfbf;
    border-color: #bfbfbf;
  }
`

export const SecondarySubmitInput = styled(SubmitInput)`
  background-color :#fff;
  border-color: #000;
  color: #000;
  transition-property: background-color,color,border;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  :hover {
    background-color: #000;
    border-color: #000;
    color: #fff;
  }
  :active {
    background-color: #911620;
    border-color: #911620;
  }
  :disabled {
    background-color: #bfbfbf;
    border-color: #bfbfbf;
  }
`

export const PrimaryHref = styled(Link)`
  font-size: 1rem;
  border-bottom: 1px solid #d5d5d5;
  :hover {
    border-bottom: 3px solid #d22030;
  }
`
export const BreadCrumbSection = styled.section`
  padding: 1.5rem;
`

