// 4 routes
const { PostModel } = require("../model/Post.model");

// getPost ,getPostById , deletePost ,updatePost

const getPost = async (req, res) => {
  try {
    // db call

    const postData = await PostModel.find();

    return res.status(200).send({
      message: "data get successfully",
      data: postData,
    });
  } catch (error) {
    console.log("error: ", error);
  }
};

const getPostById = async (req, res) => {
  try {
  } catch (error) {
    console.log("error: ", error);
  }
};

const demo = async (req, res) => {
  try {
  } catch (error) {
    console.log("error: ", error);
  }
};

module.exports = {
  getPost,
  demo,
};
