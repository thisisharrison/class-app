const Validator = require('validator');
// custom text validator
const validText = require('./valid-text');

const validateRegisterInput = data => {
  let errors = {};

  let { email, password, password2 } = data;

  email = validText(email) ? email : '';
  password = validText(password) ? password : '';
  password2 = validText(password2) ? password2 : '';

  // add error messages to errors object to pass to frontend
  if (!Validator.isEmail(email)) {
    errors.email = 'Email is invalid.';
  }
  if (Validator.isEmpty(email)) {
    errors.email = 'Email field is required.'
  }
  if (Validator.isEmpty(password)) {
    errors.password = 'Password is required.'
  }
  if (Validator.isEmpty(password2)) {
    errors.password2 = 'Confirm password field is required.'
  }
  if (!Validator.isLength(password, {min: 6, max: 30})) {
    errors.password = 'Password must be at least 6 characters.'
  }
  if (!Validator.equals(password, password2)) {
    errors.password2 = 'Passwords must match.'
  }

  // return error object with messages if any
  // return boolean to for routes to check if data was valid
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}

module.exports = validateRegisterInput;