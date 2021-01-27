const express = require("express");
const bcrypt = require('bcryptjs');
const router = express.Router();

const User = require('../../models/User');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

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
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
});

module.exports = router;