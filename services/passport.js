
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done)=>{
    done(null, user.id);//user id = mongo record id
});

passport.deserializeUser((id, done)=>{
        User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback', //sends user back from google
    proxy: true
},
    async (accessToken, refreshToken, profile, done) =>{
      const existingUser = await User.findOne({googleId: profile.id})

      if(existingUser){
            return done(null, existingUser );
        }

        const user = await  new User({googleId: profile.id}).save() //profile comes from google
       done(null, user);
    }
)
); // new instance of passport js strategy

