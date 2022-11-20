const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const mysql = require("mysql");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello Abdullah!");
});
