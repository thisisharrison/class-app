const mongoose = require('mongoose');
const Class = require('./Class');
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

ClassTimeSchema.post('save', (doc, next) => {
  Class.findByIdAndUpdate(doc.class, { $push: { classTimes: doc._id } })
    .then(result => next())
})

ClassTimeSchema.post('remove', { document: true, query: false }, function(doc){
  Class.findByIdAndUpdate(doc.class, 
    { $pull: { classTimes: doc._id } },
    { new: true }
  ).exec()
})


module.exports = ClassTime = mongoose.model('ClassTime', ClassTimeSchema);