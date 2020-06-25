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

  axios
    .get(url)
    .then(function (response) {
      let convertedRates = [];
      //Commenting Functionality as it is restricted by this API Subscription plan
      // target.forEach((e) => {
      //   let url2 =
      //     url +
      //     "convert?access_key=" +
      //     API_KEY +
      //     "&from=" +
      //     base +
      //     "&to=" +
      //     e +
      //     "&amount=" +
      //     amount;
      //   axios.get(url2).then(function (response2) {
      //     console.log(response2);
      //     convertedRates.push(new Convertedrates(e, response2.info.rate));
      //   });
      // });

      let result = {
        success: response.data.success,
        timestamp: response.data.timestamp,
        historical: response.data.historical,
        base: response.data.base,
        date: response.data.date,
        rates: response.data.rates,
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
