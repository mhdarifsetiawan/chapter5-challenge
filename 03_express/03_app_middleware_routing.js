const express = require("express");
const userRouter = require("./users/users.route");
const app = express();
const port = 3000;

app.use(userRouter);

app.get("/", (req, res) => {
  return res.send("Hai dari user tanpa midleware");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
