const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../../models/User');
const Class = require('../../models/Class');


router.get("/test", (req, res) => res.json({ msg: "This is the saves route" }));

// Index of current user's all saved classes
router.get('/', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.findById(req.user._id)
      .populate({ path: 'saves', select: ['name', 'admin'], populate: { path: 'admin', select: ['fname', 'lname'] } })
      .then(user => res.json(user.saves))
  });

// Add a class to current user's saved classes
router.post('/', passport.authenticate('jwt', {session: false}), 
  (req, res) => {
    const { classId } = req.body;

    User.findByIdAndUpdate(req.user._id, 
      { $addToSet: { saves: classId } }, 
      { new: true })
      .populate({ path: 'saves', select: ['name', 'admin'], populate: { path: 'admin', select: ['fname', 'lname'] } })
      .exec(
      (err, result) => {
        res.json(result.saves);
      }
    )
});

// Remove a class from current user's saved classes
router.delete('/:classId', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.findByIdAndUpdate(req.user._id,
      { $pull: { saves: req.params.classId } },
      { new: true })
      .populate({ path: 'saves', select: ['name', 'admin'], populate: { path: 'admin', select: ['fname', 'lname'] } })
      .exec(
      (err, result) => {
        res.json(result.saves);
      }
    )
  });


module.exports = router;