const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../../models/User');
const ClassTime = require('../../models/ClassTime');


router.get("/test", (req, res) => res.json({ msg: "This is the bookings route" }));

// Index of current user's all bookings class times
router.get('/', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.findById(req.user._id)
      .then(user => res.json({ bookings: user.bookings }))
  });

// Add a class time to current user's bookings
// Add current user to a class time
router.post('/', passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { classTimeId } = req.body;
    const newStudent = req.user.toObject();
  
    try {
      await User.findByIdAndUpdate(req.user._id,
        { $addToSet: { bookings: classTimeId } }
      ).exec()
      await ClassTime.findByIdAndUpdate(classTimeId,
        { $addToSet: { students: newStudent } }, 
        { new: true }, 
        (err, result) => res.json(result)
      ).exec()
    } catch (err) {
      res.status(422)
    }
  });

// Remove a class time from current user's bookings
// Remove a current user from a class time
router.delete('/:classTimeId', passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    
    try {
      await User.findByIdAndUpdate(req.user._id,
        { $pull: { bookings: req.params.classTimeId } }
      ).exec()
      await ClassTime.findByIdAndUpdate(req.params.classTimeId,
        { $pull: { students: { _id: req.user._id } } },
        { new: true },
        (err, result) => res.json(result)
      ).exec()
    } catch (err) {
      res.status(422)
    }
  });




module.exports = router;