const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const router = express.Router();

const User = require('../../models/User');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

// route to sign up for the app
router.post("/register", (req, res) => {
    // Check if email exists
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
                                const payload = { id: user.id, fname: user.fname };
                                
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
// returns Bearer + token that will be used in our axios request headers
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({email: 'This user does not exist.'})
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = { id: user.id, fname: user.fname };

                        jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
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

module.exports = router;