const mongoose = require('mongoose');
const ClassSchema = require('./Class').schema
const ClassTimeSchema = require('./ClassTime').schema
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  fname: {
      type: String,
      required: true
  }, 
  lname: {
      type: String,
      required: false
  },
  email: {
      type: String,
      required: true,
      unique: true
  },
  password: {
      type: String,
      required: true
  },
  bio: {
      type: String,
      required: false
  },
  photo: {
      type: String,
      required: false
  },
  isAdmin: {
      type: Boolean,
      default: false
  },
  saves: [ClassSchema],
  bookings: [ClassTimeSchema]
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);