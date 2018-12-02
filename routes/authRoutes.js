const passport = require('passport'); //npm module

module.exports = app =>{

    //route handler
    app.get('/auth/google', passport.authenticate('google',{
            scope:['profile','email'] //asks for acces to user info and email
            })
        );

    app.get('/auth/google/callback',passport.authenticate('google'));

    app.get('/api/logout', (req,res)=>{
        req.logout(); //part of passport
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res)=>{
            res.send(req.user);
    });

};


