import LoginFormContainer from './login_form_container';
import SignUpFormContainer from './signup_form_container';
import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core'

const SessionWrapper = styled.section`
  background-color: white;
`

const Session = () => {
  return (
    <SessionWrapper>
      <Container maxwidth="sm">
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <LoginFormContainer />
        </Grid>

        <Grid item xs={6}>
          <SignUpFormContainer />
        </Grid>
      </Grid>
      </Container>
    </SessionWrapper>
  )
}

export default Session;