const express = require('express');
const router = express.Router();
const ClassTime = require('../../models/ClassTime');

router.get("/test", (req, res) => res.json({ msg: "This is the class times route" }));

router.get('/', (req, res) => {
  ClassTime.find()
    .then(classtimes => res.json(classtimes))
    .catch(err => res.status(404).json({ noclassesfound: 'No class times found.' }))
});

module.exports = router;