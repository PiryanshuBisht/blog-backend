const express = require("express");
const { getPost, demo } = require("../controller/Post");

const postRouter = express.Router();

postRouter.get("/", getPost);

postRouter.get("/demo", demo);

module.exports = {
  postRouter,
};
