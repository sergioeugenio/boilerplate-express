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
app.get("/json", function (req, res) {
  res.json({ message: "Hello json" });
});
module.exports = app;
