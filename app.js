// require necessary NPM packagaes
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

// instantiate express application object
const app = express();

// use static build folder in the frontend 
const path = require('path');
// tell our server to load the static build folder in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

// require route files
const users = require('./routes/api/users');
const classes = require('./routes/api/classes');
const classtimes = require('./routes/api/classtimes');
const saves = require('./routes/api/saves');
const bookings = require('./routes/api/bookings');

// require database config
// `db` will be the actual Mongo URI as a string
const db = require('./config/keys').mongoURI;

// establish database connection
// user new version of URL parser 
mongoose.connect(db, { 
  useNewUrlParser: true, 
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false })
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.log(err));

// set up middlewares
// bodyParser parses request bodies before handlers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// authenticate endpoints using json web token
app.use(passport.initialize());
// require a function that takes passport as parameter 
// and construct the JWT authentication strategy 
require('./config/passport')(passport);

// register routes
app.use('/api/users', users);
app.use('/api/classes', classes);
app.use('/api/classtimes', classtimes);
app.use('/api/saves', saves);
app.use('/api/bookings', bookings);

// define port for API to run on
const port = process.env.PORT || 5000;

// run API on designated port
app.listen(port, () => console.log(`Server running on port ${port}`));