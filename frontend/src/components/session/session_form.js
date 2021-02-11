import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { FormControl, TextField, ThemeProvider } from '@material-ui/core';
import { theme, SubmitInput } from './session_style';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password2: '',
      errors: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderHeaders = this.renderHeaders.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.formType === "Log In") {
      if (nextProps.currentUser === true) {
        this.props.history.push('/classes');
      }
    } else {
      if (nextProps.isSignedIn === true) {
        this.props.history.push('/account/login');
      }
    }
    // Set or clear errors
    this.setState({ errors: nextProps.errors })
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
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  renderHeaders() {
    if (this.props.formType === 'Sign Up') {
      return (
        <h2>Create an account</h2>
      )
    } else {
      return (
        <h2>Sign in to your account</h2>
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

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>

        {this.renderHeaders()}
        {this.renderErrors()}    

        <form onSubmit={this.handleSubmit}>
        
        <FormControl  
          fullWidth
          variant="outlined"
        >
          <TextField
            type="text"
            label="Email Address"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.update('email')} 
          />
          <br />
          
          <TextField 
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
        </FormControl>
        
        </form>
        
        </ThemeProvider>
      </div>
    )
  }
}

export default SessionForm;