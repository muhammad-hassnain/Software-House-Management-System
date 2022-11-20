const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080 
const createProject = require('./routes/createProject')

// app.use(express.json())
app.use(cors())

app.listen(port, () => console.log("Listening on Port:", port))

//DB Connection-----------
// dbConnect = async () => {
//     try {
//         //await mongoose.connect("mongodb://localhost:27017/myapp",
//         await mongoose.connect("mongodb+srv://dbAdmin:9GRY24WWlW6lRwjS@cluster0.t0zsi.mongodb.net/BloodLink?retryWrites=true&w=majority",
//         {useNewUrlParser:true, useUnifiedTopology:true})
//         console.log("DB connected")
//     }
//     catch(err) {
//         console.log(`${err} Ocurred while connecting to DB`)
//     }
// }

// dbConnect()
//-------------------------

app.get('/', (req, res) => {
  console.log("heello world")
  // console.log("req", req); 
  res.send("Hello World")
})


app.use('/createProject' , createProject)
// app.use('/auth', auth)
// app.use("/register_donor", registerAsDonor)
// app.use("/my_requests", myRequests)
// app.use('/status',status)
// app.use("/donor_auth",donorAuth)
// app.use("/active_request",activeRequest)
//app.use("/submit_request", submitRequestRoutes)
// 404 page
app.use((req, res) => {
    console.log("req" , req)
    res.status(404).render('404', { title: '404' });
  });