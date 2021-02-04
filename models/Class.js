const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
    index: true
  },
  classTimes: [{
    type: Schema.Types.ObjectId,
    ref: 'ClassTime'
  }],
  tags: [String], 
  languages: [String]
}, {
  timestamps: true
})

ClassSchema.post('remove', { document: true, query: false }, function (doc) {
  ClassSchema.deleteMany({ class: doc.id }).exec()
})

module.exports = Class = mongoose.model('Class', ClassSchema);