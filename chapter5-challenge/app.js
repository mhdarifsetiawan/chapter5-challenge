const express = require("express");
const route = require("./router/routes");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(route);

app.use(express.static("public"));
route.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
