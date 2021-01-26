// require necessary NPM packagaes
const mongoose = require('mongoose');
const express = require('express');

// require database config
// `db` will be the actual Mongo URI as a string
const db = require('./config/keys').mongoURI;

// establish database connection
// user new version of URL parser 
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.log(err));

// instantiate express application object
const app = express();

// testing
app.get("/", (req, res) => res.send("Hello World"));

// define port for API to run on
const port = process.env.PORT || 5000;

// run API on designated port
app.listen(port, () => console.log(`Server running on port ${port}`));