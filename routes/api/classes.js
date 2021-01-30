const express = require('express');
const router = express.Router();
const Class = require('../../models/Class').Class;

router.get("/test", (req, res) => res.json({ msg: "This is the classes route" }));

router.get('/', (req, res) => {
  Class.find()
    .then(classes => res.json(classes))
    .catch(err => res.status(404).json({ noclassesfound: 'No classes found.' }))
});

module.exports = router;