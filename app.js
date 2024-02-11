const express = require("express");
const app = express();
const port = process.env.PORT || 8080; // set the port
const pagesRoutes = require("./routes/pages");

const path = require("path");

app.use(pagesRoutes);

app.listen(port, () => {
  console.log(`Server is running on : ${port}`);
});
