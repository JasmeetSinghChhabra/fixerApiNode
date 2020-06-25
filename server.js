// server.js
const path = require("path");
const express = require("express");

const app = express();

app.use("/api", (req, res, next) => {
  var amount = req.query.amount;
  var base = req.query.base;
  var target = req.query.target;

  console.log("Amount : " + amount);
  console.log("Base : " + base);
  console.log("Target : " + target);
});
app.use("/", express.static("public"));

app.listen(3000, () => {
  console.log("App running at http://localhost:3000");
});
