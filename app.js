const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const homeRoute = require("./routes/home");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000);
