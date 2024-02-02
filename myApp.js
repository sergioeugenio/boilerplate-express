require("dotenv").config();
let express = require("express");
let app = express();
// Challenge 01
/*
app.get("/", function (req, res) {
  res.send("Hello Express");
});
*/

// Challenge 02
/*
let absolutepath = __dirname + "/views/index.html";
app.get("/", function (req, res) {
  res.sendFile(absolutepath);
});
*/

//Challenge 03
/*
//let publicpath = __dirname + "/public";
app.use("/public", express.static(__dirname + "/public"));
*/

// Challenge 04
/*
app.get("/json", function (req, res) {
    res.json({ message: "Hello json" });
  });
*/

// Challenge 05
/*
app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});
*/

// Challenge 06
app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

module.exports = app;
