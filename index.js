const express = require('express');
const app = express();

app.get('/', (req,res)=> {
    res.send({greeting: 'hi there'});
});

//localhost:5000
const PORT = process.env.PORT || 5000; //heroku assigned to port otherwise local 5000

app.listen(PORT, ()=>{
    console.log(`app starting right now...`);
});