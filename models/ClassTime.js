const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Class = require('./Class');

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

ClassTimeSchema.post('save', { document: true, query: false }, (doc, next) => {
  const Class = mongoose.model('Class')
  Class.findByIdAndUpdate(doc.class, 
    { $push: { classTimes: doc._id } })
    .then(result => next())
}) 

ClassTimeSchema.post('remove', { document: true, query: false }, function(doc){
  const Class = mongoose.model('Class')
  Class.findByIdAndUpdate(doc.class, 
    { $pull: { classTimes: doc._id } },
    { new: true }
  ).exec()
})


module.exports = ClassTime = mongoose.model('ClassTime', ClassTimeSchema);