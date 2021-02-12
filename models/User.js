const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  fname: {
      type: String,
      required: false
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
  city: {
    type: String,
    required: false
  },
  affiliate: {
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
  saves: [{
    type: Schema.Types.ObjectId,
    ref: 'Class',
    index: true
  }],
  bookings: [{
    type: Schema.Types.ObjectId,
    ref: 'ClassTime',
    index: true
  }]
}, {
  timestamps: true,
  toObject: {
    transform: (_doc, user) => {
      delete user.password
      delete user.bookings
      delete user.saves
      return user
    }
  }
})

module.exports = User = mongoose.model('User', UserSchema);