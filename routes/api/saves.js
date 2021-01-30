const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../../models/User');


router.get("/test", (req, res) => res.json({ msg: "This is the saves route" }));

router.post('/', passport.authenticate('jwt', {session: false}), 
  (req, res) => {
    User.findByIdAndUpdate(req.user.id, 
      { $addToSet: { saves: req.body.class } },
      { new: true },
      (err, result) => {
        if (err) {
          res.status(404).json({ noclass: 'Error on class.' })
        } else {
          res.json(result)
        }
      }
    )
    .catch(err => res.status(404).json({ nouser: 'No user found.' }))
});

router.delete('/', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.findByIdAndUpdate(req.user.id, 
      { $pull: { saves: req.body.class } },
      { new: true },
      (err, result) => {
        if (err) {
          res.status(404).json({ noclass: 'Error on class.' })
        } else {
          res.json(result)
        }
      }
    )
    .catch(err => res.status(404).json({ nouser: 'No user found.' }))
  });


module.exports = router;