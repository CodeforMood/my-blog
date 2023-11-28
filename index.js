const path = require("path");
const express = require("express"); // require express module
const app = express(); // calls express function to start new Express app
const ejs = require("ejs");
app.set("view engine", "ejs");

app.listen(4000, () => {
  console.log("App listening on port 4000");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.use(express.static("public"));
