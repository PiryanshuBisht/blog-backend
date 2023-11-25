const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const PostModel = mongoose.model("post", postSchema);

module.exports = {
  PostModel,
};

// export PostModel
// import PostModel from ""

// require("file_path")
//md
