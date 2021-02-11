import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  line-height: 20px;
  font-size: 15px;
  font-weight: 600px;
  letter-spacing: 1.2px;
  background-color: #fafafa;
  height: 75px;
  
  grid-template-columns: 6rem auto 1fr;
  grid-template-rows: 5rem minmax(0,auto);
  align-items: center;
  margin: 0 auto;
  padding: 0 1.5rem
`

export default Nav;