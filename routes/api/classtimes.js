const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ClassTime = require('../../models/ClassTime');

router.get("/test", (req, res) => res.json({ msg: "This is the class times route" }));

router.get('/', (req, res) => {
  ClassTime.find()
    .then(classtimes => res.json(classtimes))
    .catch(err => res.status(404).json({ noclasstimesfound: 'No class times found.' }))
});

router.get('/class/:classId', (req, res) => {
  ClassTime.find({ class: req.params.classId })
    .then(classtimes => res.json({ [req.params.classId]: classtimes }))
    .catch(err => res.status(404).json({ noclassstimefound: 'No class time found with that class ID.' }))
});

router.post('/class/:classId', (req, res) => {
  const newClassTime = new ClassTime ({
    class: req.params.classId, 
    startTime: req.body.startTime, 
    endTime: req.body.endTime
  });

  newClassTime.save()
    .then(classtime => res.json(classtime))
});

router.patch('/:id', (req, res) => {
  ClassTime.findByIdAndUpdate(req.params.id, 
    {$set: {
      startTime: req.body.startTime,
      endTime: req.body.endTime
    }},
    {new: true},
    (err, result) => {
      if (err) {
        res.status(404).json({ noclasstimefound: 'No class time found with that ID.' })
      } else {
        res.json(result)
      }
    }
  )
});

router.delete('/:id', (req, res) => {
  ClassTime.findByIdAndDelete(req.params.id,
    (err, result) => {
      if (err) {
        res.status(404).json({ noclasstimefound: 'No class time found with that ID.' })
      } else {
        res.json(result)
      }
    }
  )
})

module.exports = router;