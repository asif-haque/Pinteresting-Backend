const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/pinterestClone");

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // stores whoever likes
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      default: [],
      ref: "User", // ref to which the id might belong
    },
  ],
});

module.exports = mongoose.model("Post", postSchema);
