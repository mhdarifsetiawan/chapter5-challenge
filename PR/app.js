const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./users/users.route");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(userRouter);

userRouter.get("/", (req, res) => {
  res.send(`Ini halaman Home`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
