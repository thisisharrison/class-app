const moment = require('moment');

// Check if input is number for unix time
const validNumber = num => {
  return typeof num === 'number';
}

// Check if unix is greater than present time
const validTime = unix => {
  return parseInt(unix) > moment().unix();
}

module.exports = { 
  validNumber, 
  validTime
};