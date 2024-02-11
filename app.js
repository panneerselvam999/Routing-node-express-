const express = require("express");
const app = express();
const port = process.env.PORT || 8080; // set the port
const pagesRoutes = require("./routes/pages");

app.use(pagesRoutes);

// app.use("/product", (req, res, next) => {
//   res.send("<h1>product</h1>");
// });
// app.use("/buy", (_req, res, next) => {
//   res.send("<h1>buy</h1>");
// });
// app.use("/contact", (req, res, next) => {
//   res.send("<h1>contact</h1>");
// });
// app.get("/", (req, res, next) => {
//   res.send("<h1>HOME</h1>");
// });
app.use((req, res, next) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on : ${port}`);
});
