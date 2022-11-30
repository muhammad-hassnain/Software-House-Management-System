const express = require('express')
<<<<<<< Updated upstream
const cors = require('cors')
const app = express()
const createProject = require('./routes/createProject')
const createClientReview = require('./routes/createClientReview')
const viewProject = require('./routes/viewProject')
=======
// var cookieParser = require('cookie-parser');
// const connection = require('database.js');
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const createProject = require('./routes/createProject')
const createClientReview = require('./routes/createClientReview')
const CreateClientProfile = require('./routes/createClientProfile')
>>>>>>> Stashed changes

app.use(cors())
app.use(express.json())
require('dotenv').config();


app.listen(process.env.port, () => console.log("Listening on Port:", process.env.port))

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
app.get('/', function(req, res)  {
  console.log("hello world")
  // console.log("req", req); 
  res.send("Hello World")
})

console.log("here")
app.use('/createproject' , createProject)
app.use('/createclientreview', createClientReview)
<<<<<<< Updated upstream
app.use('/viewProject', viewProject)


=======
app.use('/createclientprofile', CreateClientProfile)
>>>>>>> Stashed changes
module.exports = app;
