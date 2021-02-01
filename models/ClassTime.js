const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassTimeSchema = new Schema({
  class: {
    type: Schema.Types.ObjectId,
    ref: 'Class',
    index: true
  },
  students: [],
  startTime: {
    type: Number,
    required: true
  },
  endTime: {
    type: Number, 
    required: true
  }
}, {
  timestamps: true
})


module.exports = ClassTime = mongoose.model('ClassTime', ClassTimeSchema);