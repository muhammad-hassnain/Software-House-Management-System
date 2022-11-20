const express = require("express");
const router = express.Router();
const { Client } = require("../models");

router.get("/", async (req, res) => {
  const allClients = await Client.findAll();
  res.json(allClients);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Client.create(post);
  res.json(post);
});

module.exports = router;
