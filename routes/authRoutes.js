const passport = require('passport'); //npm module

module.exports = app =>{

    //route handler
    app.get('/auth/google', passport.authenticate('google',{
            scope:['profile','email'] //asks for acces to user info and email
            })
        );

    app.get('/auth/google/callback',passport.authenticate('google'));
};


