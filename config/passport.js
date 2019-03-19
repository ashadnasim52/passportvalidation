const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../model/User');

const keys = require('./keys');

passport.use(new GoogleStrategy({
        //google strategy options
        callbackURL: '/redirect/access',
        clientID: keys.id,
        clientSecret: keys.secret,


    },
    (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        const ToSubmit = new User({
            name: profile._json.name,
            email: profile._json.email,
            password: 'jhdska',
            googleID: profile.id,


        })
        ToSubmit.save().then(user => {
            console.log('saved....');

        }).catch(err => {
            console.error(err);

        })


    }
))