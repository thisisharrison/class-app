const express = require('express');
const router = express.Router();
const url = require('url')
const querystring = require('querystring');

const mongoose = require('mongoose');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = require('../../models/User')
const Class = require('../../models/Class');
const ClassTime = require('../../models/ClassTime');
const { validateClassInput } = require('../../validation/classes')

router.get("/test", (req, res) => res.json({ msg: "This is the classes route" }));

// View all classes
router.get('/', (req, res) => {

  console.log(req.query)
  
  const { tags, languages, startTime } = req.query
  
  const classQuery = []
  if (tags) {
    classQuery.push({ tags: { $in: tags } })
  }
  if (languages) {
    classQuery.push({ languages: { $in: languages } })
  }
  const userStartTime = startTime ? startTime : 0
  // ({ $and: [{ price: { $ne: 1.99 } }, { price: { $exists: true } }] })

  const query = classQuery.length > 0 ? {$and: classQuery} : {} 
  
  Class
    .find(query)
    .populate({ path: 'admin', select: ['fname', 'lname', 'affiliate', 'city', 'photo', 'bio'] })
    // filters out classes with no class times
    .where({ classTimes: { $exists: true, $ne: [] } })
    .populate({ path: 'classTimes', match: { startTime: { $gte: userStartTime }}, options: { sort: { startTime: 1 }}, select: ['startTime', 'endTime']})
    .then(classes => { 
      // filters out no class time based on user's filter date
      const filterClasses = classes.filter(_class => _class.classTimes.length !== 0);
      // return filter result
      res.json(classesObject(filterClasses));
      // for debugging 
      // res.json(classesObject(classes));
    }) 
    .catch(err => res.status(404).json({ noclassesfound: 'No classes found' }))

  // Using Aggregate (to-do)
  // Class.aggregate([
  //   { 
  //     $lookup: {
  //       from: 'classtimes',
  //       localField: '_id',
  //       foreignField: 'class',
  //       as: 'classtime_info'
  //     }
  //   },
  //   {
  //     $project: {
  //       name: 1,
  //       description: 1,
  //       admin: 1,
  //       classTimes: 1,
  //       tags: 1,
  //       languages: 1,
  //       classtime_info: {
  //         $filter: {
  //           input: '$classtime_info',
  //           as: 'classtime',
  //           cond: { $gte: ['$$classtime.startTime', parseInt(req.query.startTime)]}
  //         }
  //       }
  //     }
  //   }
  // ]).exec((err, classes) => {
    
  //   // Class.populate(classes, 
  //   //   { path: 'admin', select: ['fname', 'lname', 'affiliate', 'city', 'photo', 'bio'] })
  //   //   .then(popClasses => console.log(popClasses))
  // })
  
  
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

    // Validate authorization
    if (!req.user.isAdmin) {
      return res.status(401).json({ notadmin: 'Only admin can create a class' })
    }

    // Validate input
    const { errors, isValid } = validateClassInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newClass = new Class ({
      name: req.body.name,
      description: req.body.description,
      admin: req.user.id,
      tags: req.body.tags,
      languages: req.body.languages
    })

    newClass.save()
      .then(_class => 
        _class.populate({ path: 'admin', select: ['fname', 'lname', 'affiliate', 'city', 'photo', 'bio'] }, 
          (err, result) => res.json(result))
        )
      .catch(err => res.status(422).json(err))
  }
);

// Show a class
router.get('/:id', (req, res) => {
  Class.findById(req.params.id)
    .populate({ path: 'admin', select: ['fname', 'lname', 'affiliate', 'city', 'photo', 'bio'] })
    .populate({ path: 'classTimes', options: { sort: { startTime: 1 } }, select: ['startTime', 'endTime'] })
    .then(_class => res.json(_class))
    .catch(err => 
      res.status(404).json({ noclassfound: 'No class found with that ID' })
    );
});

// Edit a class
router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // Validate authorization
    if (!req.user.isAdmin) {
      return res.status(401).json({ notadmin: 'Only admin can edit a class' })
    }
    // Validate input
    const { errors, isValid } = validateClassInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // Validate class admin is request user then perform update
    Class.findById(req.params.id)
      .then(_class => {
        if (_class.admin._id.toString() !== req.user.id) {
          errors.ownership = 'Only class owner can edit this class.';
          return res.status(401).json(errors);
        }
        Class.findByIdAndUpdate(req.params.id,
          {
            $set: {
              name: req.body.name,
              description: req.body.description,
              tags: req.body.tags,
              languages: req.body.languages
            }
          },
          { new: true })
          .populate({ path: 'admin', select: ['fname', 'lname', 'affiliate', 'city', 'photo', 'bio'] })
          .populate({ path: 'classTimes', options: { sort: { startTime: 1 } }, select: ['startTime', 'endTime'] })
          .then(result => res.json(result))
          .catch(err => res.status(422).json(err))
      })
      .catch(err => {
        res.status(404).json({ noclassfound: 'No class found with that ID' })
      })
});

// Delete a class
router.delete('/:id', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // Validate authorization
    if (!req.user.isAdmin) {
      return res.status(401).json({ notadmin: 'Only admin can delete a class' })
    }
    
    Class.findById(req.params.id)
      .then(_class => {
        // Validate class admin is request user
        if (_class.admin._id.toString() !== req.user.id) {
          return res.status(401).json({ ownership: 'Only clas owner can delete this class'})
        }
        _class.remove();
        res.json(_class);
      })
      .catch(err => res.status(404).json({ noclassfound: 'No class found with that ID' }));
  }
)

// Get admin user's classes
router.get('/admin/all', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    if (req.user.isAdmin) {
      Class.find({ admin: req.user.id })
        .populate({ path: 'admin', select: ['fname', 'lname', 'affiliate', 'city', 'photo', 'bio'] })
        .then(_classes => res.json(_classes));
      } else {
      return res.status(401).json({ notadmin: 'Only admin can view admin\'s classes' });
    }
  }
)



module.exports = router;