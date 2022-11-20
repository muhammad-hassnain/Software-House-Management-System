var express = require('express');
const db = require('../database');
var router = express.Router();
var users = [
  {
    email: 'ayesha@gmail.com', password: 'password' 
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req)
  console.log(res)
  res.send("Welcome to backend");
});

// router.get('/createProject', function(req, res, next) {
//   console.log(req)
//   // console.log(res)
//   // res.send("Welcome to backend");
// });

router.get('/login', function(req, res, next) {
  console.log(req)
  console.log(res)
  res.send("Welcome to backend");
});

router.post('/login', function(req, res) {
  // console.log("herer " , req.body)
  const {email, password} = req.body;
  if(email && password) {
    try{
      db.query(`INSERT INTO soft.management.ACCOUNT_INFO VALUES('${email}', '${password}')`)
      res.status(201).send({ msg: 'Created User' })
    }
    catch (err) {
      console.log(err);
    }
    
  }
})

// router.post('/createproject', function(req, res) {
//   console.log(req.body);
//   const response = {
//     success: false,
//     errormessage: ''
//   };

//   db.query("INSERT IGNORE INTO projects VALUES;", [req.body.form_name, req.body.form_description, req.bodyassigned_to, req.bodydate_start,
//     req.body.date_end, req.body.revenue, req.body.client_id], (err) => {

//   if (err == False)
//   {
//     response.success = true;
//   }

//   res.send(JSON.stringify(response));
// })
// })



module.exports = router;