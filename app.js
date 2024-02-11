const express = require("express");
const app = express();
const port = process.env.PORT || 8080; // set the port
const pagesRoutes = require("./routes/pages");
const rootDir = require("./utils/path");

const path = require("path");

app.use(pagesRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(port, () => {
  console.log(`Server is running on : ${port}`);
});
