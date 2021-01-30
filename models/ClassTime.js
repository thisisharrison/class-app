const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const ClassTimeSchema = new Schema({
  class: {
    type: Schema.Types.ObjectId,
    ref: 'Class',
    index: true
  },
  students: [User],
  startTime: {
    type: Date,
    default: Date.now
  },
  endTime: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

module.exports = ClassTime = mongoose.model('ClassTime', ClassTimeSchema);