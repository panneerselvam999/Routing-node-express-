const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../utils/path");

// router.use("/product", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "views", "product.html"));
// });
// router.use("/buy", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "views", "buy.html"));
// });
// router.use("/contact", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "views", "contact.html"));
// });
// router.get("/", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "views", "home.html"));
// });
// router.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "views", "404.html"));
// });
router.use("/product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "product.html"));
});
router.use("/buy", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "buy.html"));
});
router.use("/contact", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

// router.use(express.static(path.join(__dirname, "public")));

// router.use((req, res, next) => {
//   res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
// });

module.exports = router;
