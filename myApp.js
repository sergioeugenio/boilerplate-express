require("dotenv").config();
let express = require("express");
let app = express();
// Ejercicio 01
/*
app.get("/", function (req, res) {
  res.send("Hello Express");
});
*/

// Ejercicio 02
/*
let absolutepath = __dirname + "/views/index.html";
app.get("/", function (req, res) {
  res.sendFile(absolutepath);
});
*/

//Ejercicio 03
/*
//let publicpath = __dirname + "/public";
app.use("/public", express.static(__dirname + "/public"));
*/

// Ejercicio 04
/*
app.get("/json", function (req, res) {
    res.json({ message: "Hello json" });
  });
*/

// Ejercicio 05
app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

module.exports = app;
