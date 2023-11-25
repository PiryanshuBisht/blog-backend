const mongoose = require("mongoose");

const connect = mongoose.connect(
  "mongodb+srv://piryanshu:piryanshu@cluster0.gjhczst.mongodb.net/blogdb"
);

module.exports = {
  connect,
};
