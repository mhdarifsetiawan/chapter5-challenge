const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hai dari user tanpa midleware");
});

app.post("/users", (req, res) => {
  return res.send("ok");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
