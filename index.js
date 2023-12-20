const path = require("path");
const express = require("express"); // require express module
const app = express(); // calls express function to start new Express app
const ejs = require("ejs");
const bodyParser = require("body-parser");
const BlogPost = require("./models/BlogPost");
const mongoose = require("mongoose");

const url = `mongodb+srv://strizhovvladislav96:Vlad199621480@cluster0.wfcoqtn.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url);

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.listen(4000, () => {
  console.log("App listening on port 4000");
});

app.post("/search", async (req, res) => {
  const blogposts = await BlogPost.find({ title: new RegExp(req.body.search) });
  console.log(req.body.search);
  res.render("index", { blogposts });
});

app.get("/", async (req, res) => {
  const blogposts = await BlogPost.find(
    req.query.search ? { title: new RegExp(req.query.search) } : {},
  );
  console.log(req.query.search);
  res.render("index", { blogposts });
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

app.get("/posts/new", (req, res) => {
  res.render("create");
});

app.post("/posts/store", async (req, res) => {
  await BlogPost.create(req.body);
  res.redirect("/");
});
