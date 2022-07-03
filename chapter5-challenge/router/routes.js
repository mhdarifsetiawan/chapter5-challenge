const express = require("express");
const { getChapter3, getChapter4, getUser } = require("../services/service");
const route = express.Router();

route.get("/chapter3", getChapter3);
route.get("/chapter4", getChapter4);
route.get("/user/:userName", getUser);

module.exports = route;
