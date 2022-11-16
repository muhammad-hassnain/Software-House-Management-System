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

module.exports = router;