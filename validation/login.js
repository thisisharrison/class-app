const Validator = require('validator');
// custom text validator
const validText = require('./valid-text');

const validateLoginInput = data => {
  let errors = {};
  
  let { email, password } = data;

  email = validText(email) ? email : '';
  password = validText(password) ? password : '';

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

  // return error object with messages if any
  // return boolean to for routes to check if data was valid
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}

module.exports = validateLoginInput;