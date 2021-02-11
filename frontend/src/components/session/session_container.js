import LoginFormContainer from './login_form_container';
import SignUpFormContainer from './signup_form_container';
import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core'

const Session = () => {
  return (
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
  )
}

export default Session;