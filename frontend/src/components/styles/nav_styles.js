import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  line-height: 1.2rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 1.2;
  height: 4rem;
  grid-template-columns: 6rem auto 1fr;
  grid-template-rows: 5rem minmax(0,auto);
  align-items: center;
  margin: 0 auto;
  padding: 0 1.5rem
`

export const NavLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 1rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.875rem;
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
    width: 0;
    top: auto;
    left: 0;
    background: #d31334;
    transition: width .25s ease-in-out
  }
  :hover:after {
    width: 2rem;
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
  ${props => props.mobile && 
  `
    svg {
      height: 24px;
      width: 24px;
      margin-right: 0.5rem;
    }
    padding-left: 1rem;
  `}  
  padding-right: 1rem;
`

export const NavWrapper = styled.div`
  width: 100%;
  background-color: #fafafa;
`

export const NavWrapperMobile = styled(NavWrapper)`
  display: flex;
  align-items: baseline;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  h1 {
   margin: 0; 
   font-size: 1.5rem;
  }
`
