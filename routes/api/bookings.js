const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../../models/User');
const ClassTime = require('../../models/ClassTime');


router.get("/test", (req, res) => res.json({ msg: "This is the bookings route" }));

router.post('/', passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { classTimeId } = req.body;
    const { _id, fname, lname, email, photo } = req.user;
    const newStudent = { _id, fname, lname, email, photo };
  
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

router.delete('/:id', passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    
    try {
      await User.findByIdAndUpdate(req.user._id,
        { $pull: { bookings: classTimeId } }
      ).exec()
      await ClassTime.findByIdAndUpdate(req.params.id,
        { $pull: { students: { _id: req.user._id } } },
        { new: true },
        (err, result) => res.json(result)
      ).exec()
    } catch (err) {
      res.status(422)
    }
  });




module.exports = router;