const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');


mongoose.connect(keys.mongoURI);
const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 *1000, // 30 days currentlyhow long this cookie can exist before it expires
        keys:[keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

//localhost:5000
const PORT = process.env.PORT || 5000; //heroku assigned to port otherwise local 5000

app.listen(PORT, ()=>{
    console.log(`app starting right now...`);
});


