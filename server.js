// server.js
const path = require("path");
const express = require("express");
const axios = require("axios");
const { SSL_OP_EPHEMERAL_RSA } = require("constants");
const fetchUrl = require("fetch").fetchUrl;

const app = express();

app.use("/api", (req, res, next) => {
  let date = req.query.date;
  let amount = parseInt(req.query.amount, 10);
  let base = req.query.base;
  let target = req.query.target;

  console.log("Date : " + date);
  console.log("Amount : " + amount);
  console.log("Base : " + base);
  console.log("Target : " + target);
  let url = "http://data.fixer.io/api/";
  let API_KEY = "f5a9c4be0416317dcdeffc0dad390909";
  url =
    url +
    date +
    "?access_key=" +
    API_KEY +
    "&base=" +
    base +
    "&symbols=" +
    target;
  class Convertedrates {
    constructor(currency, convertedRate) {
      this.currency = currency;
      this.convertedRate = convertedRate;
    }
  }

  convertedRates = [];

  function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }
  fetchUrl(url, function (error, meta, body) {
    let ng = body.toString();
    let start = getPosition(ng, "{", 2);
    let end = ng.indexOf("}");
    let rates = ng.substring(start + 1, end).split(",");
    console.log(rates.length);
    rates.forEach((element) => {
      let check = element.replace('"', "").replace('"', "").split(":");
      // console.log("Check : " + check[1]);
      convertedRates.push(
        new Convertedrates(check[0], parseFloat(check[1], 10) * amount)
      );
    });
  });
  convertedRates.forEach((e) => console.log("Data  :   " + e));
  axios
    .get(url)
    .then(function (response) {
      let result = {
        success: response.data.success,
        timestamp: response.data.timestamp,
        historical: response.data.historical,
        base: response.data.base,
        date: response.data.date,
        convertedRates,
      };
      console.log(result);
      res.send(result);
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
