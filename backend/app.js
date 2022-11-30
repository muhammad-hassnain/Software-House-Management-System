const express = require('express')
const cors = require('cors')
const app = express()
const createProject = require('./routes/createProject')
const createClientReview = require('./routes/createClientReview')
const viewProject = require('./routes/viewProject')

app.use(express.json())
app.use(cors())
require('dotenv').config();

app.listen(process.env.port, () => console.log("Listening on Port:", process.env.port))

app.get('/', function(req, res)  {
  console.log("hello world")
  // console.log("req", req); 
  res.send("Hello World")
})


app.use('/createproject' , createProject)
app.use('/createclientreview', createClientReview)
app.use('/viewProject', viewProject)


module.exports = app;
