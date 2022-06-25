const express = require("express");
const { getUsers } = require("./users.service");
const userRouter = express.Router();

userRouter.get("/users", getUsers);
userRouter.post("/users", (req, res) => {
  return res.send("Hai dari user router");
});
userRouter.get("/users/:userId", (req, res) => {
  return res.send("Hai dari user router");
});
userRouter.put("/users/:userId", (req, res) => {
  return res.send("Hai dari user router");
});
userRouter.delete("/users/:userId", (req, res) => {
  return res.send("Hai dari user router");
});

module.exports = userRouter;
