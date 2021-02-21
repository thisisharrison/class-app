import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { FormControl, TextField, ThemeProvider } from '@material-ui/core';
import { theme, SubmitInput, SubmitButton } from '../styles/styles';
import * as demo from './demo';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password2: '',
      errors: {},
      timer: null,
      demo: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderHeaders = this.renderHeaders.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    const timer = setTimeout(() => this.setState({demo: true}), 3000);
    this.setState({ timer })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.props.history.push('/classes'); 
    }
    if (prevProps.isSignedIn !== this.props.isSignedIn) {
      // Log in user when new user signed up
      const { email, password } = this.state;
      this.props.login({
        email,
        password
      })
    }
    if (prevProps.errors !== this.props.errors) {
      // Set or clear errors
      this.setState({ errors: this.props.errors })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { login, signup, formType, history } = this.props;
    const { email, password, password2 } = this.state;
    if (formType === "Sign Up") {
      signup({
        email,
        password,
        password2
      }, history);
    } else {
      login({
        email,
        password
      });
    }
    clearTimeout(this.state.timer);
    this.setState({ timer: null, demo: false });
  }

  async handleDemo(e) {
    e.preventDefault();
    if (e.target.value === 'user') {
      await this.setState({ email: 'jlawrence@email.com', password: demo.password })
    } else if (this.target.value === 'admin') {
      await this.setState({ email: 'mdiaz@email.com', password: demo.password })
    }
    this.handleSubmit(e);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }
  
  renderErrors(prop) {
    if (this.props.formType === 'Sign Up') {
      if (this.state.errors.register) {
        return this.state.errors.register[prop];
      } else {
        return false;
      }
    } else {
      if (this.state.errors.login) {
        return this.state.errors.login[prop];
      } else {
        return false;
      }
    }
  }

  renderHeaders() {
    if (this.props.formType === 'Sign Up') {
      return (
        <div>
        <h2>Create an account</h2>
        </div>
      )
    } else {
      return (
        <div>
        <h2>Sign in to your account</h2>
        </div>
      )
    }
  }

  renderButton() {
    if (this.props.formType === 'Sign Up') {
      return (
        'CREATE ACCOUNT'
      )
    } else {
      return (
        'SIGN IN'
      )
    }
  }

  renderConfirmPassword() {
    if (this.props.formType === "Sign Up") {
      return (
        <TextField 
          error={this.renderErrors('password2') ? true : false}
          helperText={this.renderErrors('password2') ? this.renderErrors('password2') : false}
          type="password"
          label="Confirm Password"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.update('password2')} 
          />
      )
    }
  }

  renderDemoButtons() {
    return this.state.demo && this.props.formType === 'Log In' ? 
      (
      <>
        <SubmitButton value='user' onClick={this.handleDemo}>Demo User</SubmitButton>
        <SubmitButton value='admin' onClick={this.handleDemo}>Demo Admin</SubmitButton>
      </>
      ) : null
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>

        {this.renderHeaders()}

        <form onSubmit={this.handleSubmit}>
        
        <FormControl  
          fullWidth
          variant="outlined"
        >
          <TextField
            error={this.renderErrors('email') ? true : false}
            helperText={this.renderErrors('email') ? this.renderErrors('email') : false}
            type="text"
            label="Email Address"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.update('email')} 
          />
          <br />
          
          <TextField 
            error={this.renderErrors('password') ? true : false}
            helperText={this.renderErrors('password') ? this.renderErrors('password') : false}
            type="password"
            label="Password"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.update('password')} 
          />
          <br />
          
          {this.renderConfirmPassword()}
          
          <SubmitInput type="submit" value={this.renderButton()} />
          
          {this.renderDemoButtons()}

        </FormControl>
        
        </form>
        
        </ThemeProvider>
      </div>
    )
  }
}

export default withRouter(SessionForm);