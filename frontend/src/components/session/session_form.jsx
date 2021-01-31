import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

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
        this.props.history.push('/login');
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
        'Create Account'
      )
    } else {
      return (
        'Sign In'
      )
    }
  }

  renderConfirmPassword() {
    if (this.props.formType === "Sign Up") {
      return (
        <label>
          Confirm Password:
          <input type="password"
            onChange={this.update('password2')} />
        </label>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderHeaders()}
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
              <input type="text"
              onChange={this.update('email')} />
          </label>

          <label>
            Password:
              <input type="password"
              onChange={this.update('password')} />
          </label>
            {this.renderConfirmPassword()}
          <input type="submit" value={this.renderButton()} />
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);