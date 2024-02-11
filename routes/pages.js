const express = require("express");
const router = express.Router();

router.use("/product", (req, res, next) => {
  res.send("<h1>product</h1>");
});
router.use("/buy", (req, res, next) => {
  res.send("<h1>buy</h1>");
});
router.use("/contact", (req, res, next) => {
  res.send("<h1>contact</h1>");
});
router.get("/", (req, res, next) => {
  res.send("<h1>HOME</h1>");
});

module.exports = router;
