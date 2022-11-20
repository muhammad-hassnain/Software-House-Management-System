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
  res.send("Welcome to backend");
});

router.post('/login', function(req, res) {
  // let result = users.find(user=> user.email === req.body.email)
  // if (result){
  //   if (result.password == req.body.password){
  //     res.status(200).send({
  //       message : 'Successful Login!'
  //     })
  //   }else{
  //     res.status(200).send({
  //       message : 'password incorrect'
  //     })
  //   }
  // } else {
  //   res.status(200).send({
  //     message : 'User not found!'
  //   })
  // }

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

router.post('/updatepassword', function(req, res) {
  console.log(req.body.employee.id);
  const response = {
    success: false,
    errormessage: ''
  };
  // console.log(db);
  // `SELECT password FROM software_management.account_info WHERE employee_id=${req.body.employee.id}`
  db.query("SELECT * FROM account_info WHERE employee_id=?;", [req.body.employee.id], (err, rows) => {
    if (rows[0].password != req.body.oldpassword) {
      response.errormessage += 'Wrong password. ';
    } else if (req.body.newpassword != req.body.newpasswordconfirmation) {
      response.errormessage += 'New passwords don\'t match.';
    } else {
      db.query(`UPDATE account_info SET password=? WHERE employee_id=?`, [req.body.newpassword, req.body.employee.id])
    }

    if (response.errormessage == '')
    {
      response.success = true;
    }

    res.send(JSON.stringify(response));
  })
})

module.exports = router;