// server.js
const path = require("path");
const express = require("express");
const axios = require("axios");

const app = express();

app.use("/api", (req, res, next) => {
  var date = req.query.date;
  var amount = req.query.amount;
  var base = req.query.base;
  var target = req.query.target;

  console.log("Date : " + date);
  console.log("Amount : " + amount);
  console.log("Base : " + base);
  console.log("Target : " + target);
  let url = "http://data.fixer.io/api/";
  let access_key = "?access_key=f5a9c4be0416317dcdeffc0dad390909&base=";
  url = url + date + access_key + base + "&symbols=" + target;

  axios
    .get(url)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
});
app.use("/", express.static("public"));

app.listen(3000, () => {
  console.log("App running at http://localhost:3000");
});
