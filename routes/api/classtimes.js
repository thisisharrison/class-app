const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const Class = require('../../models/Class')
const ClassTime = require('../../models/ClassTime');
const { validateClassTimeInput } = require('../../validation/classtimes');

router.get("/test", (req, res) => res.json({ msg: "This is the class times route" }));

router.get('/', (req, res) => {
  ClassTime.find()
    .sort({ startTime: 1 })
    .populate({ path: 'class', select: ['name', 'description'] })
    .then(classtimes => res.json(classtimes))
    .catch(err => res.status(404).json({ noclasstimesfound: 'No class times found.' }))
});

router.get('/class/:classId', (req, res) => {
  ClassTime.find({ class: req.params.classId })
    .sort({ startTime: 1 })
    .populate({ path: 'class', select: ['name', 'description'] })
    .then(classtimes => res.json(classtimes))
    .catch(err => res.status(404).json({ noclasstimesfound: 'No class time found with that class ID.' }))
});

router.post('/class/:classId', 
  passport.authenticate('jwt', { session: false}),
  (req, res) => {

    if (!req.user.isAdmin) {
      return res.status(401).json({ notadmin: 'Only admin can create a class time' });
    }
    
    const { isValid, errors } = validateClassTimeInput(req.body);
    
    if (!isValid) {
      return res.status(400).json(errors);
    }

    Class.findById(req.params.classId)
      .then(_class => {

        if (_class.admin._id.toString() !== req.user.id) {
          errors.ownership = 'Only class owner can edit this class.';
          return res.status(401).json(errors);
        }

        const newClassTime = new ClassTime({
          class: req.params.classId,
          startTime: req.body.startTime,
          endTime: req.body.endTime
        });

        newClassTime.save()
          .then(classtime => classtime.populate({ path: 'class', select: ['name', 'description'] },
            (err, result) => res.json(result)))
          
      })
      .catch(err => res.status(404).json({ noclasstimesfound: 'No class time found with that class ID.' }))
    
    // const newClassTime = new ClassTime ({
    //   class: req.params.classId, 
    //   startTime: req.body.startTime, 
    //   endTime: req.body.endTime
    // });

    // newClassTime.save()
    //   .then(classtime => classtime.populate({ path: 'class', select: ['name', 'description'] }, 
    //     (err, result) => res.json(result)))
});

router.patch('/:id', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    if (!req.user.isAdmin) {
      return res.status(401).json({ notadmin: 'Only admin can patch a class time' });
    }

    const { isValid, errors } = validateClassTimeInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    ClassTime.findByIdAndUpdate(req.params.id, 
      {$set: {
        startTime: req.body.startTime,
        endTime: req.body.endTime
      }},
      {new: true})
      .populate({ path: 'class', select: ['name', 'description'] })
      .exec(
      (err, result) => {
        if (err) {
          res.status(404).json({ noclasstimesfound: 'No class time found with that ID.' })
        } else {
          res.json(result)
        }
      }
    )
});

router.delete('/:id', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    if (!req.user.isAdmin) {
      return res.status(401).json({ notadmin: 'Only admin can patch a class time' });
    }

    ClassTime.findOne({_id: req.params.id})
      .populate({ path: 'class', select: ['name', 'description'] })
      .then(classtime => classtime.remove().then(classtime => {
        res.json(classtime);
      }))
      .catch(err => res.status(404).json({ noclasstimesfound: 'No class time found with that ID.' }))
})

module.exports = router;