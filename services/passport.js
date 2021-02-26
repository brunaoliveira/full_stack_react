const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({googleId: profile.id})
            .then((existingUser) => {
                if (existingUser) {
                    // there is already a record with that profile.id
                    done(null, existingUser);
                } else {
                    // there is no record of that userId, create one
                    new User({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user)); 
                }
            })
    })
);

