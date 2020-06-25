// const express = require("express");
// const app = express();
const port = 3000;
var axios = require("axios");
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const currencyData = require("./currencyData");
let url = "";
//2013-12-24?
let access_key = "";
// base=EUR& symbols=USD,CAD,EUR"

function checkBase(base) {
  let based = currencyData.currencies.includes(base.toUpperCase());
  console.log(based);
  if (based) {
    return currencyData.currencies.find((e) => {
      if (e.toLowerCase() === base.toLowerCase()) {
        console.log("found : " + e);
        return e;
      }
    });
  } else {
    rl.question("Not Found  ! Enter Base ? ", function (base) {
      checkBase(base);
    });
  }
}
//data.fixer.io/api/2013-12-24?access_key=f5a9c4be0416317dcdeffc0dad390909&base=EUR&symbols=USD,CAD,EUR

console.log("url" + url);

