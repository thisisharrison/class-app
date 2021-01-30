const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = require('./User').schema;

const ClassTimeSchema = new Schema({
  class: {
    type: Schema.Types.ObjectId,
    ref: 'Class',
    index: true
  },
  students: {
    type: [UserSchema],
    default: undefined
  },
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

ClassTimeSchema.post('save', (doc, next) => {
  debugger
})

module.exports = ClassTime = mongoose.model('ClassTime', ClassTimeSchema);