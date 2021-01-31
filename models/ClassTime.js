const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassTimeSchema = new Schema({
  class: {
    type: Schema.Types.ObjectId,
    ref: 'Class',
    index: true
  },
  students: [],
  startTime: Number,
  endTime: Number
}, {
  timestamps: true
})


module.exports = ClassTime = mongoose.model('ClassTime', ClassTimeSchema);