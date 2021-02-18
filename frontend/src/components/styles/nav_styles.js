import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  max-width: 85.75rem;
  line-height: 20px;
  font-size: 15px;
  font-weight: 600px;
  letter-spacing: 1.2px;
  height: 75px;
  grid-template-columns: 6rem auto 1fr;
  grid-template-rows: 5rem minmax(0,auto);
  align-items: center;
  margin: 0 auto;
  padding: 0 1.5rem
`

export const NavLink = styled(Link)`
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
export const NavLogoLink = styled(Link)`
  @media screen and (max-width: 600px) {
    svg {
      height: 24px;
      width: 24px;
    }
  }
`

export const NavWrapper = styled.div`
  width: 100%;
  background-color: #fafafa;
`
