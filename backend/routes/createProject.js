var express = require('express');
const db = require('../database');
var router = express.Router();

router.post("/" , function (req,res)  {
    console.log("body is: ", req.body)
  
  
    // const response = {
    //   success: false,
    //   errormessage: ''
    // };
//     db.query("INSERT IGNORE INTO projects VALUES;", [req.body.form_name, req.body.form_description, req.bodyassigned_to, req.bodydate_start,
//       req.body.date_end, req.body.revenue, req.body.client_id], (err) => {
  
//     if (err == '')
//     {
//       response.success = true;
//     }
  
//     res.send(JSON.stringify(response));
//   })


    // (1, 'a' , 'desc', '2', '12-03-2020', '15-03-2020', 23, 32, 'in-progress')
    db.query("INSERT IGNORE INTO soft_management.projects (form_name, start_time, end_time, revenue, client_id, assigned_to_pm) VALUES ?", 
    [req.body.form_name, req.body.date_start,req.body.date_end, req.body.revenue, req.body.client_id, req.body.assigned_to], function (err, result, fields) {
      
        // if any error while executing above query, throw error
      if (err) throw err;
      // if there is no error, you have the result
    //   res.send(JSON.stringify(response));
      console.log(result);
    });
})

module.exports = router