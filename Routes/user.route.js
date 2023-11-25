const express = require("express");
const { register, login } = require("../controller/User");

const userRouter = express.Router();

// register

userRouter.post("/register", register);

userRouter.post("/login", login);

module.exports = {
  userRouter,
};
