const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const router = express.Router();
// for our private routes 
const passport = require('passport');

// custom validations
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const User = require('../../models/User');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

// route to sign up for the app
router.post("/register", (req, res) => {
  // validate inputs
  const { errors, isValid } = validateRegisterInput(req.body);
  // input is not valid
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // input is valid, Check if email exists
  User.findOne({ email: req.body.email })
    .then(user => {
        if (user) {
            // 400 error
            return res.status(400).json({email: 'This email has already been taken.'})
        } else {
            const { fname, lname, email, password, bio, isAdmin } = req.body;
            const newUser = new User ({
                fname, lname, email, password, bio, isAdmin
            });
            // Encrypt password and then save
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err; 
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            const payload = user.toObject();
                            
                            jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
                                res.json({
                                    success: true, 
                                    token: 'Bearer ' + token
                                });
                            });
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

// route to log in 
// authenticate user (email and password)
// setting json web token for authorization
router.post("/login", (req, res) => {
  // check input
  const { errors, isValid } = validateLoginInput(req.body);
  // input is not valid
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // input is valid 
  const { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (!user) {
          return res.status(404).json({email: 'This user does not exist.'})
      }
      // check password 
      bcrypt.compare(password, user.password)
        .then(isMatch => {
            if (isMatch) {
              // create payload for token
              const payload = user.toObject();

                // returns Bearer + token that will be used in our axios request headers
              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600}, (err, token) => {
                res.json({
                    success: true,
                    token: 'Bearer ' + token 
                });
              });

            } else {
              return res.status(400).json({password: 'Password incorrect'})
            }
        })
     })
});

// Index of admin users, which are ambassadors
router.get('/', 
  (req, res) => {
    User.find({ isAdmin: true })
      .then(users => res.json({ users: users.map(user => user.toObject() )}))
  }
)

// Show a user
router.get('/:id',
  (req, res) => {
    User.findOne({ _id: req.params.id })
      .then(user => res.json({ user: user.toObject() }))
  }
)

// specifiy 'jwt' as the strategy
router.get('/current', passport.authenticate('jwt', {session: false}), 
  (req, res) => {
    res.json({
        _id: req.user.id,
        fname: req.user.fname,
        email: req.user.email, 
        saves: req.user.saves,
        bookings: req.user.bookings
    })
});

module.exports = router;