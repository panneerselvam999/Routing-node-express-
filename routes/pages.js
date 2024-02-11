const express = require("express");
const router = express.Router();

app.use("/product", (req, res, next) => {
  res.send("<h1>product</h1>");
});
app.use("/buy", (req, res, next) => {
  res.send("<h1>buy</h1>");
});
app.use("/contact", (req, res, next) => {
  res.send("<h1>contact</h1>");
});
app.get("/", (req, res, next) => {
  res.send("<h1>HOME</h1>");
});
