const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const keys = require('./keys');

const opts = {}
// creates extractor that looks for the JWT in the authorization header with the scheme 'bearer '
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          // return user object to frontend 
          return done(null, user);
        }
        // return false if no user
        return done(null, false);
      })
      .catch(err => console.log(err));
  }));
}
