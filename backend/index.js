const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const db = require("./models");
const cors = require("cors");
app.use(cors());
require("dotenv").config();

//Router
const clientRouter = require("./routes/Clients");
app.use("/clients", clientRouter);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});

app.get("/", (req, res) => {
  res.send("Hello Abdullah!");
});
