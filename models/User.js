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
    photo: {
        type: String,
        required: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    // Will change this once ClassSchema and ScheduleSchema created 
    saves: [String],
    bookings: [String]
}, {
    timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);