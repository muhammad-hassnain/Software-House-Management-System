var express = require('express');
const db = require('../database');
var router = express.Router();

router.post("/" , (req,res) => {
    // console.log(req.body.attendant_name)
    // const result = req.body
    // saveToDb(result,res)
    // console.log(req.body)
    // console.log('here');
    console.log(req)
})

module.exports = router