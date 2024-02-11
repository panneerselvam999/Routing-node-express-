const express = require("express");
const router = express.Router();
const path = require("path");

// router.use("/product", (req, res, next) => {
//   res.send("<h1>product</h1>");
// });
// router.use("/buy", (req, res, next) => {
//   res.send("<h1>buy</h1>");
// });
// router.use("/contact", (req, res, next) => {
//   res.send("<h1>contact</h1>");
// });
// router.get("/", (req, res, next) => {
//   res.send("<h1>HOME</h1>");
// });
// router.use((req, res, next) => {
//   res.status(404).send("<h1>404</h1>");
// });
router.use("/product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "product.html"));
});
router.use("/buy", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "buy.html"));
});
router.use("/contact", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "contact.html"));
});
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "home.html"));
});
router.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "404.html"));
});

module.exports = router;
