const express = require("express");
const app = express();
const port = 3000;
var Request = require("request");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const currencyData = require("./currencyData");

app.get("/", (req, res) => res.send("Hello World!"));

// App Server Connection
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
const url = "http://data.fixer.io/api/";
//2013-12-24?
const access_key = "access_key=f5a9c4be0416317dcdeffc0dad390909&";
// base=EUR& symbols=USD,CAD,EUR"

readline.question("Enter Base Currency", (base) => {
  console.log(`Hey there ${base}!`);
  if (
    currencyData.currencies.find((e) => {
      if (e === base) {
        console.log("found : " + e);
        return true;
      }
    })
  )
    Request.get(
      {
        headers: { "content-type": "application/json" },
        url: url,
      },
      (error, response, body) => {
        if (error) {
          return console.dir(error);
        }
        console.dir(JSON.parse(body));
      }
    );
  readline.close();
});
