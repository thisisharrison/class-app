import styled from 'styled-components'
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: .075rem;
  line-height: 1.25rem;
  display: inline-block;
  position: relative;
  color: inherit;
  :visited {
    color: inherit;
  }
  :after {
    display: block;
    position: absolute;
    content: '';
    height: 5px;
    bottom: -.3125rem;
    top: auto;
    left: 0;
    right: 100%;
    background: #d31334;
    transition: right .25s ease-in-out
  }
  :hover:after {
    right: 0;
  }

  ${props => props.promo && 
    `
      color: #d31334;
      :visited {
        color: #d31334;
      }
    `}
  }}
`

export default NavLink;