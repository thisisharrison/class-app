const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const Class = require('../../models/Class');
const ClassTime = require('../../models/ClassTime');

router.get("/test", (req, res) => res.json({ msg: "This is the classes route" }));

// View all classes
router.get('/', (req, res) => {
  Class.find()
    .then(classes => res.json(classesObject(classes)))
    .catch(err => res.status(404).json({ noclassesfound: 'No classes found' }))
});

// return object using class.id as key
// [{}, {}] => {key: {}, key: {}}
function classesObject(classes) {
  return classes.reduce((acc, curr) => {
    return { ...acc, [curr.id]: curr }
  }, {})
}

// Create a class
router.post('/', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    // Validation
    if (!req.user.isAdmin) {
      return res.status(401).json({ notadmin: 'Only admin can create a class' })
    }

    const newClass = new Class ({
      name: req.body.name,
      description: req.body.description,
      admin: req.user.id,
      tags: req.body.tags,
      languages: req.body.languages
    })

    newClass.save()
      .then(_class => res.json(_class))
  }
);

// Show a class
router.get('/:id', (req, res) => {
  Class.findById(req.params.id)
    .then(_class => res.json(_class))
    .catch(err => 
      res.status(404).json({ noclassfound: 'No class found with that ID' })
    );
});

// Edit a class
router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // Validation
    if (!req.user.isAdmin) {
      return res.status(401).json({ notadmin: 'Only admin can create a class' })
    }

    // find by id, update, return modified class
    Class.findByIdAndUpdate(req.params.id,
      {$set: {
        name: req.body.name,
        description: req.body.description, 
        tags: req.body.tags,
        languages: req.body.languages
      }},
      {new: true},
      (err, result) => {
        if (err) {
          res.status(404).json({ noclassfound: 'No class found with that ID' })
        } else {
          res.json(result)
        }
      }
    )
});

// Delete a class
router.delete('/:id', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // Validation
    if (!req.user.isAdmin) {
      return res.status(401).json({ notadmin: 'Only admin can create a class' })
    }
    
    // find by id, delete
    Class.findByIdAndDelete(req.params.id, 
      (err, result) => {
        if (err) {
          res.status(404).json({ noclassfound: 'No class found with that ID' })
        } else {
          res.json(result)
        }
      }  
    )
  }
)



module.exports = router;