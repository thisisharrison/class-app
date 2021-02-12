import styled from 'styled-components'

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

export const NavWrapper = styled.div`
  width: 100%;
  background-color: #fafafa;
`