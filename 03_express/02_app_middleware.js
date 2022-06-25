const express = require("express");
const app = express();
const port = 3000;

const logger = (req, res, next) => {
  console.log(`middleware info: ${req.method} - ${req.url}`);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
