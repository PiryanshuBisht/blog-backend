const express = require("express");
const { connect } = require("./config/db");
const { userRouter } = require("./Routes/user.route");
const { postRouter } = require("./Routes/post.route");
const { demo } = require("./controller/Post");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.use("/user", userRouter);

app.use("/posts", postRouter);
// app.use("/")

app.listen(8080, async () => {
  console.log("Server is listening on 8080");
  try {
    await connect;
    console.log("Connected to db");
  } catch (error) {
    console.log("error: ", error);
  }
});

// http://localhost:8080/posts

// http://localhost:8080/user/
