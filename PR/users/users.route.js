const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("./users.service");
const userRouter = express.Router();

// api view all users
userRouter.get("/users", getUsers);

// api create user
userRouter.post("/users", createUser);

// api view 1 user
userRouter.get("/users/:userId", getUser);

// Update user
userRouter.put("/users/:userId", updateUser);

userRouter.delete("/users/:userId", deleteUser);

module.exports = userRouter;
