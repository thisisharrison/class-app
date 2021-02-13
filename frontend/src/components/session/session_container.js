import LoginFormContainer from './login_form_container';
import SignUpFormContainer from './signup_form_container';
import { Container, Grid } from '@material-ui/core'


const Session = () => {
  return (
    <div className="formWrapper">
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
    </div>
  )
}

export default Session;