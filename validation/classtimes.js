const { validTime, validNumber } = require('./valid-time');
const Validator = require('validator');

const validateClassTimeInput = data => {
  let errors = {};

  let { startTime, endTime } = data;

  // check if time is valid number type
  startTime = validNumber(startTime) ? startTime.toString() : '';
  endTime = validNumber(endTime) ? endTime.toString() : '';

  // check if time is > than present time
  if (Validator.isEmpty(startTime)) {
    errors.startTime = 'Start Time field is required.';
  } else if (!validTime(startTime)) {
    errors.startTime = 'Start Time must be greater than present time.';
  }
  if (Validator.isEmpty(endTime)) {
    errors.endTime = 'End Time field is required.';
  } else if (!validTime(endTime)) {
    errors.endTime = 'End Time must be greater than present time.';
  } else if (!Validator.isFloat(endTime, { gt: parseInt(startTime) })) {
    errors.endTime = 'End Time must be greater than Start Time.'
  }

  // return error object with messages if any
  // return boolean to classes routes to check if data was valid
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}


module.exports = {
  validateClassTimeInput,
};