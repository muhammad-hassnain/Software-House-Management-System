const express = require('express')
const app = express()
// var cookieParser = require('cookie-parser');
// const connection = require('database.js');
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const createProject = require('./routes/createProject')
const createClientReview = require('./routes/createClientReview')
const CreateClientProfile = require('./routes/createClientProfile')
const viewProject = require('./routes/viewProject')


app.use(cors())
app.use(express.json())
require('dotenv').config();


app.listen(process.env.port, () => console.log("Listening on Port:", process.env.port))


app.get('/', function(req, res)  {
  console.log("hello world")
  // console.log("req", req); 
  res.send("Hello World")
})

console.log("here")
app.use('/createproject' , createProject)
app.use('/createclientreview', createClientReview)
app.use('/viewProject', viewProject)
app.use('/createclientprofile', CreateClientProfile)
module.exports = app;
