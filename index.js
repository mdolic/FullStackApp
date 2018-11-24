const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

//localhost:5000
const PORT = process.env.PORT || 5000; //heroku assigned to port otherwise local 5000

app.listen(PORT, ()=>{
    console.log(`app starting right now...`);
});