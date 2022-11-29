const express = require('express')
// var cookieParser = require('cookie-parser');

const cors = require('cors')
const app = express()
// const port = 8080 
const createProject = require('./routes/createProject')
const createClientReview = require('./routes/createClientReview')

app.use(express.json())
app.use(cors())
require('dotenv').config();

app.listen(process.env.port, () => console.log("Listening on Port:", process.env.port))

//DB Connection-----------
// dbConnect = async () => {
//     try {
//         //await mongoose.connect("mongodb://localhost:27017/myapp",
//         await mongoose.connect("mongodb+srv://dbAdmin:9GRY24WWlW6lRwjS@cluster0.t0zsi.mongodb.net/BloodLink?retryWrites=true&w=majority",
//         {useNewUrlParser:true, useUnifiedTopology:true})
//         console.log("DB connected")
//     }
//     catch(err) {
//         console.log(`${err} Occurred while connecting to DB`)
//     }
// }

// dbConnect()
//-------------------------

app.get('/', function(req, res)  {
  console.log("hello world")
  // console.log("req", req); 
  res.send("Hello World")
})


app.use('/createproject' , createProject)
// app.use( function(req, res)  {
//     console.log("req" , req)
//     res.status(404).render('404', { title: '404' });
//   });
app.use('/createclientreview', createClientReview)
module.exports = app;
