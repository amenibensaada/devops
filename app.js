const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(" our first test!");
});

module.exports = app