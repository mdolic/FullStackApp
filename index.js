const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();


passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback' //sends user back from google
},
    accessToken=>{
    console.log(accessToken);
        }
    )
); // new instance of passport js strategy

//route handler
app.get('/auth/google', passport.authenticate('google',{
    scope:['profile','email']
    })
);

//localhost:5000
const PORT = process.env.PORT || 5000; //heroku assigned to port otherwise local 5000

app.listen(PORT, ()=>{
    console.log(`app starting right now...`);
});