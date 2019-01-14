// load JWTStrategy
const JwtStrategy = require('passport-jwt').Strategy;
// load extract jwt
const ExtractJwt = require('passport-jwt').ExtractJwt;

// load mongoose
const mongoose = require('mongoose');
// load users model
const User = mongoose.model('users');
// load secret keys
const keys = require('../config/keys');

// create options object that we can pass for
// our JWT token
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

// then we will export the passport JWT strategy
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      // console.log(jwt_payload)

      // the check if the payload has the value
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err))
    })
  )
}