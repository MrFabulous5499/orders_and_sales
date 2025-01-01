//importing the express module to manage api connections
const express = require('express');
const app = express();

const db = require("./models");
//listens to all the requests on localhost port 5000

db.sequelize.sync().then(()=>{
    app.listen(5000, ()=>{
         console.log("Server runnning on port 5000")
        });
});

