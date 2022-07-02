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

// error handling
app.get("/error", (req, res) => {
  throw new Error("Ada error");
});
app.use((err, req, res, next) => {
  return res.status(500).json({
    message: err.message,
    status: 500,
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
