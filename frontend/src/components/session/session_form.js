import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { FormControl, TextField, ThemeProvider } from '@material-ui/core';
import { theme, SubmitInput } from '../styles/styles';

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

  // keys = login, register 
  // key.props = email, password, password2
  
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

    // if (this.state.errors[key]) {
    //   const errors = this.state.errors[key]
    // return (
    //   <ul>
    //     {Object.keys(errors).map((err, i) => (
    //       <li key={`${key}-error-${i}`}>{errors[err]}</li>
    //     ))}
    //   </ul>
    // );
    
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
        </FormControl>
        
        </form>
        
        </ThemeProvider>
      </div>
    )
  }
}

export default SessionForm;