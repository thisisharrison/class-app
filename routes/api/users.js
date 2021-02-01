const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const keys = require('../../config/keys');
const passport = require('passport');
const User = require('../../models/User');

// custom validation
const validLoginInput = require('../../validation/login');
const validRegisterInput = require('../../validation/register');


// Controller for register
router.post("/register", (req, res) => {
  // Validation
  const { errors, isValid } = validRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      // User already exists
      if (user) {
        errors.email = 'Email already taken';
        return res.status(400).json(errors);
      } else {
        const { email, password, fname, lname, bio } = req.body;
        const newUser = new User({
          email,
          password, 
          fname, 
          lname, 
          bio
        });
        // Encrypt the password: Generate salt
        bcrypt.genSalt(10, (err, salt) => {
          // User salt to hash and set password equal hash
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => {
                // Add token
                const payload = { id: user.id, handle: user.handle };
                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                  res.json({
                    success: true,
                    token: 'Bearer ' + token
                  });
                });
              })
              .catch(err => console.log(err));
          })
        });
      }
    });
});

// Controller for login
router.post("/login", (req, res) => {
  // Validation 
  const { errors, isValid } = validLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ email: "User does not exist" });
      }
      // Check password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            // Add webtoken
            const payload = { id: user.id, email: user.email };
            // Add webtoken so user stays signed in across multiple requests to backend
            jwt.sign(
              payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              });
          } else {
            errors.password = 'Incorrect password';
            return res.status(400).json(errors);
          }
        })
    });
});

// Protected Route to show current user's account
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  // passport returns user object in request header as defined in config
  res.json({
    id: req.user.id,
    email: req.user.email
  });
});

// Index of admin users, which are ambassadors
router.get('/ambassadors',
  (req, res) => {
    User.find({ isAdmin: true })
      .then(users => res.json({ users: users.map(user => user.toObject()) }))
  }
)

// Show a user
router.get('/:id',
  (req, res) => {
    User.findById(req.params.id)
      .then(user => res.json({ user: user.toObject() }))
  }
)

module.exports = router;