const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Class = require('../../models/Class');

router.get("/test", (req, res) => res.json({ msg: "This is the classes route" }));

router.get('/', (req, res) => {
  Class.find()
    .then(classes => res.json(classes))
    .catch(err => res.status(404).json({ noclassesfound: 'No classes found.' }))
});

router.post('/', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
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

router.get('/:id', (req, res) => {
  Class.findById(req.params.id)
    .then(_class => res.json(_class))
    .catch(err => 
      res.status(404).json({ noclassfound: 'No class found with that ID' })
    );
});

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
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

router.delete('/:id', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
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