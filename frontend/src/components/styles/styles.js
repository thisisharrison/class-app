import { createMuiTheme } from '@material-ui/core'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const theme = createMuiTheme({
  typography: {
    fontFamily: "sans-serif"
  },
  palette: {
    primary: {
      light: "#000",
      main: "#000",
      dark: "#000",
      contrastText: "#fff"
    },
    secondary: {
      light: "#000",
      main: "#000",
      dark: "#000",
      contrastText: "#fff"
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
  margin-top: 1rem;
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

export const SubmitButton = styled.button`
  font-weight: 600;
  background-color :#fff;
  border-color: #fff;
  color: #000;
  border: .0625rem solid;
  border-radius: .25rem;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  margin-top: 1rem;
  text-transform: uppercase;
  :hover {
    background-color: #000;
    border-color: #000;
    color: #fff;
  }
  animation: fadeIn ease 2.5s;
  -webkit-animation: fadeIn ease 2.5s;
  @keyframes fadeIn{
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
`

export const HomePageHeroCTA = styled(SecondarySubmitInput)`
  font-weight: 700;
  font-size: .875rem;
`

export const PrimaryHref = styled(Link)`
  font-size: 1rem;
  border-bottom: 2px solid #d5d5d5;
  :hover {
    border-bottom: 2px solid #d22030;
  }
  display: inline-flex;
  align-items: center;
  transition-property: border-bottom;
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;
`

export const BreadCrumbSection = styled.section`
  padding: 2rem 0 2rem 0;
`

