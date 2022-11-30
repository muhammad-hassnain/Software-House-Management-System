var express = require('express');
const db = require('../database');
var router = express.Router();
const bodyParser = require('body-parser')
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

router.get('/projects', function(req, res) {
  const response = {
    success: false,
    errormessage: '',
    userId: 1,
    data: '',
  };

  db.query("SELECT * FROM projects;", (err, rows) => {
    if (rows.length == 0) {
      // response.errormessage += 'Project does not exist';
      res.send(false);
    } else {
      response.data = rows;
      console.log(rows);
      db.query(`SELECT * FROM tasks WHERE project_id=${rows[0].id}`, (err_2, rows_2) => {
        db.query(`SELECT * FROM assigned_swes JOIN employees ON employees.id=assigned_swes.employee_id HAVING assigned_swes.project_id=${rows[0].id};`, (err_3, rows_3) => {
          db.query(`SELECT * FROM employees WHERE designation='Software Engineer'`, (err_4, rows_4) => {
            res.send({
              project: rows,
              tasks: rows_2,
              assigned_swes: rows_3,
              unassigned_swes: rows_4
            })
          })
        })
      })
    }
  })

  if (response.errormessage == '')
  {
    response.success = true;
  }

  // res.send(JSON.stringify(response));
})

function markTaskAsComplete(task) {
  return new Promise((resolve, reject)=>{
    db.query(`UPDATE tasks SET status='Complete' WHERE id=${task.id}`), (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    }
  })
}

router.post('/marktaskcomplete', async function(req, res) {
  const task = req.body.task;

  // const status = await markTaskAsComplete(task)
  db.query(`UPDATE tasks SET status='Complete' WHERE id=${task.id}`);

  db.query(`SELECT * FROM tasks WHERE project_id=${task.project_id}`, (err_2, rows_2) => {
    res.send({tasks: rows_2})      
  })
})

router.post('/assignSWE', async function(req, res) {
  const project = req.body.state.project[0];
  const toAssignID = req.body.state.toAssignSWE;
  
  db.query(`INSERT INTO assigned_swes (project_id, employee_id) VALUES (${project.id}, ${toAssignID})`);

  db.query(`SELECT * FROM assigned_swes JOIN employees ON employees.id=assigned_swes.employee_id HAVING assigned_swes.project_id=${project.id};`, (err, rows) => {
    res.send({ assigned_swes: rows})      
  })
})

module.exports = router;