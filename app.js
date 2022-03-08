const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World : our first test!");
});

module.exports = app